export const _agents = {
    seller: { agentPort: 8041, intPort: 3001 },
    registry: { agentPort: 8051, intPort: 3002 },
    broker: { agentPort: 8061, intPort: 3003 },
    buyer: { agentPort: 8071, intPort: 3004 },
    sellersbank: { agentPort: 8081, intPort: 3005 },
    buyersbank: { agentPort: 8091, intPort: 3006 }
};

export const _ownershipSchema = {

    "attributes": ['city', 'address', 'purchase_date', 'amplitude', 'number_of_rooms', 'timestamp'],
    "schema_name": `ownershipSchema`,
    "schema_version": "1.0",

}


export const _sellerOffer = {
    "auto_remove": true,
    "auto_issue": true,
    "support_revocation": true,
    "cred_def_id": "<Enter a valid Connection ID>",
    "connection_id": "<Enter a valid Connection ID>",
    "credential_preview": {
        "@type": "did:sov:BzCbsNYhMrjHiqZDTUASHg;spec/issue-credential/1.0/credential-preview",
        "attributes": [
            {
                "mime-type": "plain/text",
                "name": "city",
                "value": "Camerino"
            },
            {
                "mime-type": "plain/text",
                "name": "address",
                "value": "Via Madonna delle Carceri"
            },
            {
                "mime-type": "plain/text",
                "name": "purchase_date",
                "value": "2021/01/01"
            },
            {
                "mime-type": "plain/text",
                "name": "amplitude",
                "value": "200mq"
            },
            {
                "mime-type": "plain/text",
                "name": "number_of_rooms",
                "value": "8"
            },
            {
                "mime-type": "plain/text",
                "name": "timestamp",
                "value": "2022/01/01 15:40:30"
            }
        ],
        "predicates": [

        ]
    },
    "trace": true
};