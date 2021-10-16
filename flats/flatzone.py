from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport

# Select your transport with a defined url endpoint
transport = AIOHTTPTransport(url="https://api.flatzone.cz/graphql")

# Create a GraphQL client using the defined transport
client = Client(transport=transport, fetch_schema_from_transport=True)

# Provide a GraphQL query
query = gql(
    """
    query QueryName {
    searchByAddress(
        source: "pricelists",
        address: {city: "Beroun"},
        filters: {type: [FLAT]},
        offset: 7,
        size: 30,
        currency: USD
    ) {
        count
        avgPrice
        estates {
            id,
            developer
            project
        }
    }
}
"""
)

# Execute the query on the transport
result = client.execute(query)
print(result)

query2 = gql(
    """
    query Query2 {
    estate(
      source:"pricelists"
      id:"5e55381a7caef19155d960c6"
    ){
      id
    	developer
    	project
    	gps { lat lon}
  	}
}
"""
)

# Execute the query on the transport
result2 = client.execute(query2)
print(result2)
