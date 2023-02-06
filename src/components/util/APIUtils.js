import { _url } from "../config";
import { _agents } from "../../ssi/config";

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })


    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

function createInvitation(port) {
    return request({
        url: "http://localhost:" + port + "/connections/create-invitation?auto_accept=true&multi_use=true",
        method: 'POST',
        /* body:{"@type": "did:sov:BzCbsNYhMrjHiqZDTUASHg;spec/connections/1.0/invitation",
            "@id": "f833c237-71a4-4566-b77f-ca09075c051e",
            "label": "**********seller",
            "recipientKeys": [
                "9uoQv1r4r4W3U8ywRMUrVrYTsSKgtDEU6LgfQKHGX8jL"
            ],
            "serviceEndpoint": "http://172.17.0.1:"+ entry[1].agentPort-1 
        }  */
        // });
    })
}

export function getConnections(port) {
    return request({
        url: "http://localhost:" + port + "/connections",
        method: 'GET',
        /* body:{"@type": "did:sov:BzCbsNYhMrjHiqZDTUASHg;spec/connections/1.0/invitation",
            "@id": "f833c237-71a4-4566-b77f-ca09075c051e",
            "label": "**********seller",
            "recipientKeys": [
                "9uoQv1r4r4W3U8ywRMUrVrYTsSKgtDEU6LgfQKHGX8jL"
            ],
            "serviceEndpoint": "http://172.17.0.1:"+ entry[1].agentPort-1 
        }  */
        // });
    })
}

export function connectAgents(port) {
    console.log(port);
    var invitationList = [];

    //Object.entries(_agents).forEach(entry => {
    var call = createInvitation(port);
    invitationList.push(call);
    return invitationList;
}

export function receiveInvitation(invitation) {
    console.log("invitation", invitation.invitation)
    //console.log("entry", entry[0]);
    Object.entries(_agents).forEach(entry => {
        if (entry[0] !== invitation.invitation.label) {
            return request({
                url: "http://localhost:" + entry[1].agentPort + "/connections/receive-invitation?auto_accept=true&multi_use=true",
                method: 'POST',
                body: JSON.stringify(invitation.invitation)
            });
        }
    })
}

export function sendOfferAPI(port, body) {
    console.log(body);
    return request({
        url: "http://localhost:" + port + "/issue-credential/send-offer",
        method: 'POST',
        body: JSON.stringify(body)
    })
}

export function createSchemaAPI(port, body) {
    return request({
        url: "http://localhost:" + port + "/schemas",
        method: 'POST',
        body: JSON.stringify(body)
    })
}

export function createCredDefAPI(port, schemaId){
    var credDefId = {
        "revocation_registry_size": 1000,
        "schema_id": schemaId,
        "support_revocation": true,
        "tag": "default",
        "version": "1.0"
    }
    return request({
        url: "http://localhost:" + port + "/credential-definitions",
        method: 'POST',
        body: JSON.stringify(credDefId)
    })
}

