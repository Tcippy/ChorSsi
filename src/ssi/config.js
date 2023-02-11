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
    "schema_version": "7.0",

}


export const _registryOffer = {
    "auto_remove": false,
    "auto_issue": true,
    "auto_offer": true,
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


export const _proofRequest = {
    "auto_verify": true,
    "comment": "string",
    "connection_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "proof_request": {
        "name": "Proof of ownership",
        "nonce": "1",
        "version": "1.0",
        "requested_attributes": {
            "additionalProp1": {
                "name": "city",
                "cred_def_id": "16YXSaLmsrcyAE7dC5C1Wp:3:CL:12:default",
                "restrictions": [
                    {

                    }
                ],
                "non_revoked": {
                    "from": 1666434192,
                    "to": Date.now()
                }
            },

        },
        "requested_predicates": {

        },
        "trace": true
    }
};


export const _proofPresentation = {
    "requested_attributes": {
        "additionalProp1": {
            "cred_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "revealed": true
        }
    },
    "requested_predicates": {

    },
    "self_attested_attributes": {

    },
    "trace": true
};