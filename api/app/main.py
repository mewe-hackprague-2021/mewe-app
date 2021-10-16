from typing import Optional
from app.flat_finder import create_flatzone_client, find_flats
from app.flat_scorer import compute_scores
from fastapi import FastAPI

app = FastAPI()
fz_client = create_flatzone_client("https://api.flatzone.cz/graphql")


@app.get("/")
def read_root():
    return {"Hello": "World hot reload"}


# This would be precomputed in a batch job
def add_estate_score(city, estate):
    estate["scores"] = compute_scores(
        city,
        estate["gps"]["lat"],
        estate["gps"]["lon"])
    return estate

def add_scores(city, team_scores, estate):
    estate = add_estate_score(city, estate)
    estate["total_score"] = \
        (team_scores['Outdoors'] * estate['scores']['Outdoors']) + \
        (team_scores['Restaurant'] * estate['scores']['Restaurant'])
    return estate

@app.get("/search/")
def search(
        city: Optional[str] = None,
        outdoors: Optional[float] = 0,
        restaurant: Optional[float] = 0):
    team_scores = {
        'Outdoors': outdoors,
        'Restaurant': restaurant
    }
    result = find_flats(fz_client, city)
    result["searchByAddress"]["estates"] = list(map(
        lambda e: add_scores(city, team_scores, e),
        result["searchByAddress"]["estates"]))
    result["searchByAddress"]["estates"].sort(key=lambda x: x['total_score'], reverse=True)
    return result
