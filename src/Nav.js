import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function Navibar() {
  return (
    <div className="Navibar">
      <Navbar fixed="bottom" variant="light">
        <Navbar.Brand href="#home">lubna.io</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#faq">FAQ</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#career">Career</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navibar;
