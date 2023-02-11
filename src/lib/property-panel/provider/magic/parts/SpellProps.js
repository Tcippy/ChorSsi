import entryFactory from "bpmn-js-properties-panel/lib/factory/EntryFactory";
import { is } from "bpmn-js/lib/util/ModelUtil";

import properties from 'bpmn-js-properties-panel/lib/provider/camunda/parts/implementation/Properties';
import elementHelper from 'bpmn-js-properties-panel/lib/helper/ElementHelper';
import cmdHelper from 'bpmn-js-properties-panel/lib/helper/CmdHelper';
import { _agents, _ownershipSchema } from '../../../../../ssi/config';
import './bootstrap.css';
import { connectAgents, receiveInvitation, createSchemaAPI, createCredDefAPI } from "../../../../../components/util/APIUtils";
import SSIPage from "../../../../../components/SSIPage/SSIPage";

var domify = require('min-dom').domify;

const [schema, setSchema] = ([]);

function html(name, messageName, id) {

  //const agentService = require('../../../../../ssi/AgentService');
  //const allConnections = await agentService.getConnections();

  var parsedName = name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g, '');
  var parsedMessageName = messageName.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g, '');
  window.localStorage.setItem("request", parsedMessageName+"+"+id);
  console.log("item",localStorage.getItem("request").split("+")[0])
  window.localStorage.setItem("pageOpen", parsedName);

  window.dispatchEvent(new Event("storage"));
  window.location.reload(false);


  console.log(name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g, ''));
  var url = "http://localhost:" + _agents[parsedName].intPort;

  return domify('<div class="bpp-field-getCurrentUser(_agents[parsedName].agentPort);wrapper"' +
    '<div class="bpp-properties-entry" ' + 'data-show="show"' + '>' +
    '<label for="tortellini">' + "click to perform SSI operation" + '</label>' +
    '<a id="tortellini" href=' + url + ' target="_blank"  add" data-action="addElement"><button type="button" class="btn btn-outline-primary" data-action="addElement" ><span>Execute</span></button></a>' +
    '</div>' +
    "</div>");
  //console.log("_agents",_agents[name.toLowerCase()]);

};

function callBack(name) {
  try {
    createSchema();
    Object.entries(_agents).forEach(entry => {
      var port = entry[1].agentPort;
      connectAgents(port)[0].then(res => {
        receiveInvitation(res)

      }
      )
    });
    window.localStorage.setItem("toColour", name);
  } catch (error) {
    console.log(error);
  }
}

function createDef(port, schema) {
  createCredDefAPI(port, schema).then(cred => {
    window.localStorage.setItem("credDefId", cred.credential_definition_id)
    console.log("cred", cred.credential_definition_id)
  });
}

function createSchema() {

  createSchemaAPI(_agents.registry.agentPort, _ownershipSchema).then(res => {
    console.log("schemaa", res)
    createDef(_agents.registry.agentPort, res.schema_id)
  });


}

function connectParticipants() {

  return domify('<div class="bpp-field-wrapper"' +
    '<div class="bpp-properties-entry" ' + 'data-show="show"' + '>' +
    '<label for="tortellini">' + "Click to initialize the system" + '</label>' +
    '<button type="button"  class="btn btn-outline-primary" data-action="connectElement" ><span>Initialize</span></button>' +
    '</div>' +
    "</div>");
}

export default function (group, element, translate, bpmnFactory) {
  // Only return an entry, if the currently selected
  // element is a start event.
  //var properties = require('bpmn-js-properties-panel/lib/provider/camunda/parts/implementation/Properties'),
  // = require('bpmn-js-properties-panel/lib/helper/ElementHelper'),
  //cmdHelper = require('bpmn-js-properties-panel/lib/helper/CmdHelper');


  if (is(element, "bpmn:StartEvent")) {
    console.log("elementtt", element.businessObject.id);
   // for (var x = 0; x < document.getElementsByClassName('djs-element').length; x++) {
     // if (document.getElementsByClassName('djs-element').item(x).textContent === "Seller") {
        //console.log("dentro",document.getElementsByClassName('djs-element').item(x).getAttribute("data-element-id"));
        //document.getElementsByClassName('djs-element').item(x).style.fill="green";
        
        //console.log("dentrooo", document.querySelectorAll('[data-element-id="ChoreographyTask_0axlrdi"]')[0].getAttribute("data-element-id"));
     // }

      //console.log(document.getElementsByClassName('djs-element').item(x).textContent)
   // }
    //console.log("document", );
    window.localStorage.setItem("request", "null");
    group.entries.push(
      {
        id: "tortellini",
        html: connectParticipants(),
        modelProperty: "tortellini",
        connectElement: function () {

          console.log("sto dentro connectElement");
          return callBack(element.businessObject.id)
        }
      }
      /* entryFactory.textField(translate, {
        id: "spell",
        description: "Apply a black magic spell",
        label: "Spell",
        modelProperty: "spell",

      }) */
    );
  }

  if (is(element, "bpmn:Participant")) {
    //console.log("element", element.businessObject.name);
    //fdomify(element.businessObject.name);
    group.entries.push(
      {
        id: "tortellini",
        html: "html(element.businessObject.name)",
        modelProperty: "tortellini",

        //html: fdomify(element.businessObject.name)
      }
    );
  }

  if (is(element, "bpmn:Message")) {

    //console.log("element", element.businessObject.name);
    //fdomify(element.businessObject.name);
    console.log("element", element.businessObject.name);
    group.entries.push(
      {
        id: "tortellini",
        html: html(element.parent.businessObject.name, element.businessObject.name, element.businessObject.id),
        modelProperty: "tortellini",

        //html: fdomify(element.businessObject.name)
      }
    );
  }




}
