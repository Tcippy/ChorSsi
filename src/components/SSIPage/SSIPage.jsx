import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./SSIPage.css";
import $ from "jquery";
import Popper from "popper.js";
import 'bootstrap/dist/js/bootstrap.bundle'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { _agents, _sellerOffer } from '../../ssi/config';
import { getConnections, sendOfferAPI } from '../util/APIUtils';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTextArea,
  MDBSelect,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';


class SSIPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { agentConnections: null, connId: null, credDefId: null, bodyOffer: null }

  }
  componentDidMount = () => {
    this.getConnections();
    
  }

  handleConnIdChange = (e) => {
    this.setState({ connId: e.target.value })
    _sellerOffer.connection_id = e.target.value;
  }


  handleCredDefIdChange = (e) => {
    this.setState({ credDefId: e.target.value })
    _sellerOffer.cred_def_id = e.target.value;
    

  }

 

  sendOffer = () => {

    sendOfferAPI(_agents[localStorage.getItem("pageOpen")].agentPort,document.querySelector('#textAreaExample').textContent).then(offer =>
      console.log("offer", offer));
  }

  getConnections = () => {
    getConnections(_agents[localStorage.getItem("pageOpen")].agentPort).then(response =>
      this.setState({
        agentConnections: response.results.filter(connection => connection.their_role === 'inviter')
      })
    )

  }
  //({ pageOpen, setPageOpen })
  //const [page, setPage] = useState();

  /*  useEffect(() => {
       setPage(localStorage.getItem("pageOpen"));
 
     },[page]) */

  //var showMe = pageOpen;
  //showMe= false;
  //pageOpen = localStorage.getItem("pageOpen");
  //console.log("pageOpen",pageOpen);

  //setPage(localStorage.getItem("pageOpen"));

  render = () => {
    console.log("agentConnections", this.state.agentConnections);
    console.log("CredStorage", localStorage.getItem("credDefId"));
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
    switch (localStorage.getItem("pageOpen")) {
      case localStorage.getItem("pageOpen"): return (
        <MDBContainer fluid className='h-custom' style={{ width: '100%', marginTop: '50px' }} >

          <MDBRow className='d-flex justify-content-center align-items-center h-100' style={{ width: '110%' }}>
            <MDBCol col='12' className='' style={{ width: '100%', height: '100%', }}>

              <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px', width: '100%', height: '100%' }}>

                <MDBCardBody className='p-0' style={{ width: '100%', height: '100%' }}>

                  <MDBRow style={{ width: '100%', height: '100%' }}>

                    <MDBCol md='6' className='bg-indigo p-5' style={{ width: '100%', height: '100%', }}>

                      <h3 className="fw-normal mb-5 text-white" style={{ color: '#4835d4', width: '100%' }}>{localStorage.getItem("pageOpen").toUpperCase()}</h3>
                      <div>
                        <FloatingLabel controlId="floatingSelect" label="Select a Connection ID" style={{}}>
                          <Form.Select aria-label='mecojoni' size="lg" value={this.state.connId != null ? this.state.connId : " "} onChange={this.handleConnIdChange} style={{}} >
                          <option value=""   hidden></option>
                            {this.state.agentConnections != null ? this.state.agentConnections.map((entry) =>
                              <option key={entry.connection_id} value={entry.connection_id}>
                                {entry.their_label + "    " + entry.connection_id}</option>) : <option value="1">One</option>}
                          </Form.Select>
                        </FloatingLabel>
                      </div>
                      <div style={{ marginTop: "5px" }}>
                        <FloatingLabel controlId="floatingSelect" label="Select a Credential Definition ID"  style={{}}>
                          <Form.Select aria-label='mecojoni' size="lg"  value={this.state.credDefId != null ? this.state.credDefId : " "} onSelect={this.handleCredDefIdChange} onChange={this.handleCredDefIdChange} style={{}} >
                          <option value=""   hidden></option>
                          <option key={localStorage.getItem("credDefId")} value={localStorage.getItem("credDefId")}>{localStorage.getItem("credDefId")}</option>
                          </Form.Select>
                        </FloatingLabel>
                      </div>
                      <div style={{ width: '100%' }}>
                        <MDBTextArea label='Body' size='lg' value={JSON.stringify(_sellerOffer, null, 4)} id='textAreaExample' style={{ backgroundColor: 'white', marginTop: '5px', width: '100%' }} rows={18} />
                      </div>
                      <div style={{ marginTop: "40px" }}>
                        <MDBBtn color='light' size='lg' type='submit' onClick={this.sendOffer}>Register</MDBBtn>
                      </div>
                    </MDBCol>
                  </MDBRow>

                </MDBCardBody>

              </MDBCard>

            </MDBCol>
          </MDBRow>

        </MDBContainer>);
      default: return (
        <MDBContainer fluid className='h-custom' style={{ width: '100%', marginTop: '50px', backgroundColor: '#e4443f' }} >
          <h3 className="fw-normal mb-5 text-white" style={{ color: '#4835d4', width: '100%' }}>Click a Message to start the workflow </h3>
        </MDBContainer>
      )
    }
  }
}

export default SSIPage;