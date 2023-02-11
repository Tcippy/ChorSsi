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
import CustomRendererModule from '../renderer/CustomRenderer';
import ColoredRendererModule from '../../lib/color-picker';
import $ from 'jquery';
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
import SpellProps from '../../lib/property-panel/provider/magic/parts/SpellProps';


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
    this.state = { setPageOpen: props.setPageOpen, currentStatus: null, bpmn: props.xml, bpmnString: props.bpmnString, isLoaded: false }
    var isTrueSet = (localStorage.getItem("pageOpen") === 'true');
    this.state.setPageOpen(isTrueSet);
    console.log("this.isTrueSet", isTrueSet);

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
        //CustomRendererModule,
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
    this.startExecution();

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
            console.log("SALVO: ", response);
            this.addLabel(response);
          }).catch(error => {

            console.log("error", error);
          });
        }
      });
    }
  }

  addParticipant = (participant) => {
    if (!this.active.includes(participant)) {
      this.active.push(participant);
      localStorage.setItem("participant", this.active.reduce((acc, curr) => acc + ", " + curr));
    }



  }
  addLabel = (label) => {

    if (!this.uniqueNames.includes(label)) {
      this.uniqueNames.push(label);
      localStorage.setItem("status", this.uniqueNames.reduce((acc, curr) => acc + ", " + curr));
    }

  }


  ValidateReportDiagram = (modeler) => {
    document.addEventListener('DOMContentLoaded', () => {


      // download diagram as SVG
      //const downloadSvgLink = document.getElementById('js-download-svg');
      //downloadSvgLink.addEventListener('click', async e => {

    });



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



  }



  diagramName = () => {
    if (this.lastFile) {
      console.log("name", this.lastFile.name);
      return this.lastFile.name;
    }
    return 'diagram.bpmn';
  }

  renderModel = (a) => {
    console.log("renderModel", this.modeler.get('canvas'));
    console.log("renderModel", document.getElementById('tortellini'));
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

    var overlays = this.modeler.get('overlays');
    //var elementRegistry = this.modeler.get('elementRegistry');
    //localStorage.setItem("toColour", "");
    //console.log("localStorage.getItem",localStorage.getItem("toColour").split(" "))
    //while(elementRegistry != null ){
    //console.log("elReg",this.modeler.get('elementRegistry').get("ChoreographyTask_0axlrdi"));
    var arrayWithDuplicates = localStorage.getItem("toColour").split(" ");
    var uniqueArray = arrayWithDuplicates.filter(function (elem, pos) {
      return arrayWithDuplicates.indexOf(elem) == pos;
    })
    uniqueArray.forEach(el => {
      var shape = this.modeler.get('elementRegistry').get(el);
      if (shape != null) {
        console.log("attivooooo")
        var $overlayHtml =
          $('<div class="highlight-overlay">')
            .css({
              width: shape.width + 10,
              height: shape.height + 10
            });

        overlays.add(el, {
          position: {
            top: -5,
            left: -5
          },
          html: $overlayHtml
        });
      }
    });

    /* const canvas = this.modeler.get('canvas');
    const rootElement = canvas.getRootElement();
    //console.log(businessObj,"businessObj");
    //print(rootElement.businessObject.flowElements).then((value)=>console.log("DAJE ROMAAA",value));

    const participant = rootElement.businessObject.participants;
    this.LoadParticipant(participant);
     
    
    console.log("rootElem", rootElement.businessObject.participants); */
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
          {/*          <Link to="/profile" className='link' style={{  textDecoration: 'none' }}>
 */}        <button className="downloadButton" onClick={() => { this.startExecution() }} >Execute </button>
          {/* <button className="downloadButton1" onClick={() => this.state.setPageOpen(this.isTrueSet)} >Status </button> */}
        </div>

      </div>
    )
  }
}

export default BpmnModelerComponent;
