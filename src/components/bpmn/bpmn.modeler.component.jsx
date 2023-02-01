import React, { Component } from 'react';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-font/dist/css/bpmn-embedded.css';
import 'chor-js/assets/styles/chor-js.css';
//import '/icons/css/chor-editor.css';
//import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';
import { emptyBpmn } from '../../assets/empty.bpmn';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/bpmn';
import ChorPropertiesProvider from '../../lib/properties-provider'
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';
import "./bpmn.scss";

import { _url, _urlNuovo } from '../config';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { saveAs } from "file-saver";
import ChoreoModeler from 'chor-js/lib/Modeler';
import Reporter from '../../lib/validator/Validator';
//import getConnectedElements from '../../lib/validator/util/ValidatorUtil';
//import elaborateDiagram from '../../ssi/ElaborateDiagram';
import { _agents } from '../../ssi/config';
import Profile from '../profile/Profile'
import { response } from '../../ssi/AgentService';
import elaborateDiagram from '../../ssi/ElaborateDiagram';
//import esm from 'esm';
import magicPropertiesProviderModule from '../../lib/property-panel/provider/magic';
import magicModdleDescriptor from '../../lib/property-panel/descriptors/magic';
import CamundaModdlePackage from "camunda-bpmn-moddle/resources/camunda";
import CamundaModdleExtension from "camunda-bpmn-moddle/lib";
import CamundaPropertiesProviderModule from "bpmn-js-properties-panel/lib/provider/camunda";
import SSIPage from '../SSIPage/SSIPage';


class BpmnModelerComponent extends React.Component {

  modeler = null;
  listaNomi = [];
  isValidating = false;
  isDirty = false;
  lastFile = null;
  uniqueNames = Array.from(new Set());
  active = Array.from(new Set());

  constructor(props) {
    super(props);
    this.state = { currentStatus: null, bpmn: props.xml, bpmnString: props.bpmnString }
  }



  componentDidMount = () => {
    //const propertiesPanelModule = require('bpmn-js-properties-panel');
    //const propertiesProviderModule = require('bpmn-js-properties-panel/lib/provider/bpmn');
    //const ChoreoModeler = require('../../../node_modules/chor-js/lib/Modeler');
    this.modeler = new ChoreoModeler({
      container: '#bpmnview',
      keyboard: {
        bindTo: window
      },
      propertiesPanel: {
        parent: '#propview'
      },
      additionalModules: [
        propertiesPanelModule,
        //ChorPropertiesProvider,
        propertiesProviderModule,
        //templates,
        //Validator
        //gatto
        //resizeAllModule,
        //colorPickerModule,
        //nyanDrawModule,
        //nyanPaletteModule,
        //ColoredRendererModule,

        //CamundaPropertiesProviderModule,
        //CamundaModdlePackage,
        //CustomPaletteProvider,
        //CustomRendererModule
        magicPropertiesProviderModule,
       // magicModdleDescriptor
      ],
      keyboard: {
        bindTo: document
      }, 
       moddleExtensions: {
        magic: magicModdleDescriptor
      }  

      //, elementTemplates: templates,
      //moddleExtensions: {
      //camunda: camundaModdleDescriptor,
      //camunda: CamundaModdlePackage

      // },
    });

    this.renderModel(emptyBpmn);
    //this.ValidateReportDiagram(this.modeler);
  }

  LoadParticipant = (participant) => {
    const agentService = require('../../ssi/AgentService');
    for (var i = 0; i < _agents.length; i++) {
      participant.forEach(part => { 
        this.addParticipant(part.name.toLowerCase());
        if (part.name.toLowerCase() === _agents[i].name) {
          agentService.getStatus(_agents[i].port).then(response => {
            this.setState({
              //currentStatus: _agents[i].name + "up",
              currentStatus: response + " up"
            });
            console.log("SALVO: ",response);
            this.addLabel(response);
          }).catch(error => {
            
            console.log("error", error);
          });
        }
      });
    }
  }

  addParticipant = (participant) =>{
   if(!this.active.includes(participant)) {
      this.active.push(participant);
      localStorage.setItem("participant",this.active.reduce((acc,curr)=> acc+", "+curr));
   }   
    
    

  }
  addLabel = (label) =>{

    if(!this.uniqueNames.includes(label)){
      this.uniqueNames.push(label);
      localStorage.setItem("status",this.uniqueNames.reduce((acc,curr)=> acc+", "+curr));
    }
     
   }
  

  ValidateReportDiagram = (modeler) => {
    document.addEventListener('DOMContentLoaded', () => {


      // download diagram as SVG
      //const downloadSvgLink = document.getElementById('js-download-svg');
      //downloadSvgLink.addEventListener('click', async e => {

    });

    // open file dialog
    //document.getElementById('js-open-file').addEventListener('click', e => {
    //document.getElementById('file-input').click();
    //});

    // toggle side panels
    /* const panels = Array.prototype.slice.call(
      document.getElementById('panel-toggle').children
    );
    panels.forEach(panel => {
      panel.addEventListener('click', () => {
        panels.forEach(otherPanel => {
          if (panel === otherPanel && !panel.classList.contains('active')) {
            // show clicked panel if it is not already active, otherwise hide it as well
            panel.classList.add('active');
            document.getElementById(panel.dataset.togglePanel).classList.remove('hidden');
          } else {
            // hide all other panels
            otherPanel.classList.remove('active');
            document.getElementById(otherPanel.dataset.togglePanel).classList.add('hidden');
          }
        });
      });
    }); */

    // create new diagram
    /* const newDiagram = document.getElementById('js-new-diagram');
    newDiagram.addEventListener('click', async e => {
    //this.renderModel(blankXml);
      this.lastFile = false;
    }); */

    // load diagram from disk
    /* const loadDiagram = document.getElementById('file-input');
    loadDiagram.addEventListener('change', e => {
      const file = loadDiagram.files[0];
      if (file) {
        const reader = new FileReader();
        this.lastFile = file;
        reader.addEventListener('load', async () => {
        this.renderModel(reader.result);
          loadDiagram.value = null; // allows reloading the same file
        }, false);
        reader.readAsText(file);
      }
    }); */

    // drag & drop file
    const dropZone = document.body;
    dropZone.addEventListener('dragover', e => {
      e.preventDefault();
      dropZone.classList.add('is-dragover');
    });
    dropZone.addEventListener('dragleave', e => {
      e.preventDefault();
      dropZone.classList.remove('is-dragover');
    });
    dropZone.addEventListener('drop', e => {
      e.preventDefault();
      dropZone.classList.remove('is-dragover');
      const file = e.dataTransfer.files[0];
      if (file) {
        const reader = new FileReader();
        this.lastFile = file;
        reader.addEventListener('load', () => {
          this.renderModel(reader.result);
        }, false);
        reader.readAsText(file);
      }
    });


    // validation logic and toggle
    /* const reporter = new Reporter(modeler);
    const validateButton = document.getElementById('js-validate');
    validateButton.addEventListener('click', e => {
      this.isValidating = !this.isValidating;
      if (this.isValidating) {
        reporter.validateDiagram();
        validateButton.classList.add('selected');
        validateButton['title'] = 'Disable checking';
      } else {
        reporter.clearAll();
        validateButton.classList.remove('selected');
        validateButton['title'] = 'Check diagram for problems';
      }
    });
    modeler.on('commandStack.changed', () => {
      if (this.isValidating) {
        reporter.validateDiagram();
      }
      this.isDirty = true;
    });
    modeler.on('import.render.complete', () => {
      if (this.isValidating) {
        reporter.validateDiagram();
      }
    }); */
    // });
  }

  

  diagramName = () => {
    if (this.lastFile) {
      console.log("name", this.lastFile.name);
      return this.lastFile.name;
    }
    return 'diagram.bpmn';
  }

  renderModel = (a) => {
    console.log("renderModel",this.modeler.get('canvas'));
    this.modeler.importXML(a)
    this.isDirty = false;

  }

  openBpmnDiagram = (xml) => {
    console.log("openBpmnDiagram");
    this.modeler.importXML(xml, (error) => {
      if (error) {
        return console.log('fail import xml');
      }
      // var canvas = this.modeler.get('canvas');

      //canvas.zoom('fit-viewport');
    });
  }




  startExecution = () => {

    const canvas = this.modeler.get('canvas');
    const rootElement = canvas.getRootElement();
    //console.log(businessObj,"businessObj");
    //print(rootElement.businessObject.flowElements).then((value)=>console.log("DAJE ROMAAA",value));

    const participant = rootElement.businessObject.participants;
    this.LoadParticipant(participant);
     
    
    console.log("rootElem", rootElement.businessObject.participants);
    //console.log("currentStatus",this.state.currentStatus);
  }

  getDataChild = (res) => {
    //elaborateDiagram(this.state.currentStatus);
      console.log("res", res);
      //this.state.currentStatus;
  }

  render = () => {

    return (
      
      <div id="bpmncontainer" style={{ width: '100%', height: '100%' }} >
        
        <div id="propview" style={{ width: '25%', height: '100%', float: 'right', maxHeight: '100%', overflowX: 'auto' }}></div>
        <link rel="stylesheet" type="text/html" href="styles/app.less" />
        <div id="bpmnview" style={{ width: '75%', height: '100%', float: 'left' }}></div>
        <div className="modelerBPMN">
       {/*  <Link to="/profile" className='link' style={{  textDecoration: 'none' }}>
        <button  className="downloadButton" onClick={() => { this.startExecution() }} >Execute </button></Link>
          <button className="downloadButton1" onClick={() => { elaborateDiagram("dati dei partecipanti") }} >Status </button> */}
        </div>
        
      </div>
    )
  }
}

export default BpmnModelerComponent;
