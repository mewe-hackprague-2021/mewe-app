from OSMPythonTools.nominatim import Nominatim

nominatim = Nominatim()
areaId = nominatim.query('Praha').areaId()
print(areaId)

from OSMPythonTools.overpass import overpassQueryBuilder, Overpass
overpass = Overpass()
query = overpassQueryBuilder(area=areaId, elementType='node', selector='"leisure"="park"', out='body')
result = overpass.query(query)

parkA = result.elements()[0]
print((parkA.lat(), parkA.lon()))
parkB = result.elements()[1]
print((parkB.lat(), parkB.lon()))

# Some entry from FlatZone
flat=(49.9601136, 14.0696603)

from geopy.distance import geodesic
print(geodesic(flat, (parkA.lat(), parkA.lon())).km)
