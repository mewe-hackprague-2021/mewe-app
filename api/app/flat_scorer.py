from geopy import distance
from geopy.distance import geodesic
from OSMPythonTools.nominatim import Nominatim
from OSMPythonTools.overpass import overpassQueryBuilder, Overpass

nominatim = Nominatim()
overpass = Overpass()

def get_distance(latA, lonA, place):
    latB = place.lat()
    lonB = place.lon()
    return geodesic((latA, lonA), (latB, lonB)).km

# Constant - <sum of distances to two closest parks>, higher is better
# See https://wiki.openstreetmap.org/wiki/Map_features#Leisure
def compute_outdoors(areaId, lat, lon):
    print(areaId)
    query = overpassQueryBuilder(area=areaId, elementType='node', selector='"leisure"="park"', out='body')
    places = overpass.query(query).elements()
    distances = list(map(lambda p: get_distance(lat, lon, p), places))
    distances.sort()
    # FIXME: Pad missing values if missing
    return 50 - sum(distances[:2])

# Constant - <sum of distances to five closest restaurants>, higher is better
# See https://wiki.openstreetmap.org/wiki/Map_features#Leisure
def compute_restaurant(areaId, lat, lon):
    print(areaId)
    query = overpassQueryBuilder(area=areaId, elementType='node', selector='"amenity"="restaurant"', out='body')
    places = overpass.query(query).elements()
    distances = list(map(lambda p: get_distance(lat, lon, p), places))
    distances.sort()
    # FIXME: Pad missing values if missing
    return 100 - sum(distances[:5])

def compute_scores(city, lat, lon):
    areaId = nominatim.query(city).areaId()
    """
    scores = {
        'Automotive': 0,
        'Baby': 0,
        'Beauty': 0,
        'Books': 0,
        'Cafe': 0,
        'Clothing': 0,
        'Computers': 0,
        'Culture': 0,
        'Electronics': 0,
        'Entertainment': 0,
        'Games': 0,
        'Garden': 0,
        'Grocery': 0,
        'Health': 0,
        'Home': 0,
        'Industrial': 0,
        'Jewelry': 0,
        'Kids': 0,
        'Movies': 0,
        'Music': 0,
        'Outdoors': 0,
        'Restaurant': 0,
        'Shoes': 0,
        'Sports': 0,
        'Tools': 0,
        'Toys': 0,
        'Traveling': 0
    }
    """
    scores = {}
    scores['Outdoors'] = compute_outdoors(areaId, lat, lon)
    scores['Restaurant'] = compute_restaurant(areaId, lat, lon)
    return scores
