import React from 'react';
import {Navbar, Nav, Row, Col, Card, ButtonToolbar, ToggleButton, ToggleButtonGroup, Form, Button} from 'react-bootstrap';
import './App.css';
import Navibar from './Nav';
import { Route, Link, BrowserRouter as Router, withRouter } from 'react-router-dom';

function Login() {
  return (
    <div className="Login">
      <Card border="light">
        <Card style={{width:'18rem'}}>
          <Card.Body>
            <Card.Title className="text-center">lubna.io</Card.Title>
            <Form>
              <Form.Group>
                <Form.Label>Sign in as</Form.Label>
                <ButtonToolbar>
                  <ToggleButtonGroup style={{width:'100%'}} type="radio" name="options" defaultValue={'User'}>
                    <ToggleButton className="btnToggle" style={{width:'100%'}} value={'User'}>User</ToggleButton>
                    <ToggleButton className="btnToggle" style={{width:'100%'}} value={'Trader'}>Trader</ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              <Form.Text className="text-muted text-right">
                What is user and trader?
              </Form.Text>
              </Form.Group>
              <Form.Group controlId="formMobile">
                <Form.Label>Mobile Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter phone number" />
              </Form.Group>
              <Button className="btnSubmit" variant="primary" type="submit" vertical block>
                <Link style={{color: "white"}} to="/Code">Sign In</Link>
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Card className="mt-3">
          <Card.Body>
            <Form.Text style={{textAlign:'center'}}>Dont have any account? Register</Form.Text>
          </Card.Body>
        </Card>
        <Card border="light">
          <Card.Body>
            <Form.Text className="text-center">Get the app.</Form.Text>
          </Card.Body>
        </Card>
        <Row className="mb-3">
          <Col>
            <Card style={{height:'40px',background:'grey'}}>
            </Card>
          </Col>
          <Col>
            <Card style={{height:'40px',background:'grey'}}>
            </Card>
          </Col>
        </Row>
      </Card>
      <Navibar></Navibar>
    </div>
  );
}

export default Login;
