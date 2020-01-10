import React from 'react';
import {Navbar, Nav, Row, Col, Card, ButtonToolbar, ToggleButton, ToggleButtonGroup, Form, Button} from 'react-bootstrap';
import './App.css';
import Navibar from './Nav';
import { Route, Link, BrowserRouter as Router, withRouter } from 'react-router-dom';

function Code() {
  return (
    <div className="Code">
      <Card border="light">
        <Card style={{width:'18rem'}}>
          <Card.Body>
            <Card.Title className="text-center">lubna.io code</Card.Title>
            <Form>
              <Form.Group controlId="formMobile">
                <Form.Label>Enter the code send to +628223232112</Form.Label>
                <Form.Control type="number" placeholder="Enter code" />
                <Form.Text className="text-muted text-right">
                  RESEND CODE
                </Form.Text>
              </Form.Group>
              
              <Form.Text className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Form.Text>
              <Button className="btnSubmit mt-5" variant="primary" type="submit" vertical block>
                <Link style={{color: "white"}} to="/Exchange">Continue</Link>
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Card>
      <Navibar></Navibar>
    </div>
  );
}

export default Code;
