export const _agents = {seller: { agentPort: 8041, intPort:3001}, 
                        registry: { agentPort: 8051, intPort:3002},
                        broker: { agentPort: 8061, intPort:3003},
                        buyer: { agentPort: 8071, intPort:3004},
                        sellersbank: { agentPort: 8081, intPort:3005},
                        buyersbank: { agentPort: 8091, intPort:3006}};

export const _ownershipSchema = {

    "attributes": ['city','address','purchase_date','amplitude','number_of_rooms','timestamp'],
    "schema_name": `ownershipSchema`,
    "schema_version": "1.0",

}

