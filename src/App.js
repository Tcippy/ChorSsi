import TopBar from "./components/topbar/TopBar";
import Profile from "./components/profile/Profile";
import Bpmn from "./components/bpmn/Bpmn";
import Works from "./components/works/Works";
import "./App.scss";
import React, { useEffect, useState } from "react";
import Menu from "./components/menu/Menu";
import BpmnModeler from './components/bpmn/BpmnModeler';
import axios from 'axios';

import $ from 'jquery';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { _url, _urlNuovo } from "./components/config";
//import 'bootstrap/dist/css/bootstrap.css';
import SSIPage from "./components/SSIPage/SSIPage";
import SpellProps from "./lib/property-panel/provider/magic/parts/SpellProps";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [pageOpen, setPageOpen] = useState(true);

 // localStorage.setItem("pageOpen","seller");



  // console.log('token', localStorage.getItem("accessToken"))

  /* return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Profile />
        <Portfolio />
        <Works />
        <Bpmn />
      </div>
    </div>
  ); */

  return (
    <Router>
      <div className="app">
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections" style={{ display:'flex', flexDirection: 'row', }}>
          <div style={{ width: '65%', marginTop: '70px' }}>
            <Routes>
              <Route path="/" element={<BpmnModeler setPageOpen={setPageOpen}/>} />
              <Route path="/profile" element={<Profile />} />

              {/* <Route path="/works" element={<Works />} /> */}
              <Route path="/bpmn/:d" element={<Bpmn />} />
              <Route path="/bpmnModeler" element={<BpmnModeler setPageOpen={setPageOpen}/>} />
            </Routes>
          </div>
          <div style={{ width: '34%', marginTop:'70px' }}>
            <SSIPage pageOpen={pageOpen} setPageOpen={window.localStorage.getItem("pageOpen")} key={window.localStorage.getItem("pageOpen")}/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
