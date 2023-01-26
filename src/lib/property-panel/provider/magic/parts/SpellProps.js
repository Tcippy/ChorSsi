import entryFactory from "bpmn-js-properties-panel/lib/factory/EntryFactory";
import { is } from "bpmn-js/lib/util/ModelUtil";

import properties from 'bpmn-js-properties-panel/lib/provider/camunda/parts/implementation/Properties';
import elementHelper from 'bpmn-js-properties-panel/lib/helper/ElementHelper';
import cmdHelper from 'bpmn-js-properties-panel/lib/helper/CmdHelper';
import { _agents } from '../../../../../ssi/config';
import './bootstrap.css';

var domify = require('min-dom').domify;


function initializeConnections(){

}

function html(name) {
  
  const agentService = require('../../../../../ssi/AgentService');
  //const allConnections = await agentService.getConnections();
  agentService.default.createInvitation(8051);
  var parsedName = name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g, '');

  console.log(name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g, ''));
  var url = "http://localhost:"+_agents[parsedName].intPort;

  return domify('<div class="bpp-field-wrapper"' +
  '<div class="bpp-properties-entry" ' + 'data-show="show"' + '>' +
  '<label for="tortellini">' + "tortellini alla Paulo Dybbala" + '</label>' +
  '<a id="tortellini" href=' + url + ' target="_blank"  add" data-action="addElement"><button type="button" class="btn btn-outline-primary" data-action="addElement" ><span>Execute</span></button></a>' +
  '</div>' +
  "</div>");
  //console.log("_agents",_agents[name.toLowerCase()]);
  
};
  /* var html = domify('<div class="bpp-field-wrapper"' +
    '<div class="bpp-properties-entry" ' + 'data-show="show"' + '>' +
    '<label for="tortellini">' + "tortellini alla Paulo Dybbala" + '</label>' +
    '<a id="tortellini" href=' + url + ' target="_blank" class="action-button add" data-action="addElement"><button class="action-button add" data-action="addElement" ><span>+</span></button></a>' +
    '</div>' +
    "</div>"); */



export default function (group, element, translate, bpmnFactory) {
  // Only return an entry, if the currently selected
  // element is a start event.
  //var properties = require('bpmn-js-properties-panel/lib/provider/camunda/parts/implementation/Properties'),
  // = require('bpmn-js-properties-panel/lib/helper/ElementHelper'),
  //cmdHelper = require('bpmn-js-properties-panel/lib/helper/CmdHelper');


  if (is(element, "bpmn:StartEvent")) {

    group.entries.push(
      entryFactory.textField(translate, {
        id: "spell",
        description: "Apply a black magic spell",
        label: "Spell",
        modelProperty: "spell",

      })
    );
  }

  if (is(element, "bpmn:Participant")) {
    //console.log("element", element.businessObject.name);
    //fdomify(element.businessObject.name);
    group.entries.push(
      {
        id: "tortellini",
        html: html(element.businessObject.name),
        modelProperty: "tortellini",
        //html: fdomify(element.businessObject.name)
      }
      /* entryFactory.textBox(translate, {
       id: "spell",
       description: "Apply a black magic spell",
       label: "Spell",
       modelProperty: "spell"
     })  */
    );
  }




}
