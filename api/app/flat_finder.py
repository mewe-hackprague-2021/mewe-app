from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport


def create_flatzone_client(url):
    transport = AIOHTTPTransport(url="https://api.flatzone.cz/graphql")
    return Client(transport=transport, fetch_schema_from_transport=True)


# TODO: Better filtering
def find_flats(client, city):
#                region:"Hlavní město Praha",
    q = gql("""
        query QueryName ($city: String!) {
            searchByAddress(
                source: "ads",
                address: {
                    country: "Česko",
                    city: $city
                },
                filters: {
                    offerType: RENT,
                    condition: [NEW, RENOVATED, VERY_GOOD, GOOD, POOR, VERY_POOR],
                    disposition: [_1_KK, _1_1, _2_KK, _2_1, _3_KK, _3_1, _4_KK, _4_1, _5_KK, _5_1, _6_KK, _6_1]
                },
                offset: 0,
                size: 30,
                currency: USD
            ) {
                count
                estates {
                    id
                    gps { lat, lon }
                }
            }
        }
        """)
    params = {"city": city}
    result = client.execute(q, variable_values=params)
    return result
