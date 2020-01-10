import React from 'react';
import {Navbar, Nav, Row, Col, Card, ButtonToolbar, ToggleButton, ToggleButtonGroup, Form, Button} from 'react-bootstrap';
import './App.css';
import Navibar from './Nav';
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

function Code() {
  return (
    <div className="Code">
       <Navbar fixed="top" variant="light">
        <Navbar.Brand href="#home">lubna.io</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
      </Navbar>
      <row style={{marginTop: '10%'}}>
        <h1 className="text-center">Connect To Exchange</h1>
        <h2 className="text-center">Please connect your exchange account to our app.</h2>
        <Button className="btnSubmit" variant="primary" type="submit" vertical block>Connect to Exchange</Button>
      </row>
      <Navibar></Navibar>
    </div>
  );
}

export default Code;
