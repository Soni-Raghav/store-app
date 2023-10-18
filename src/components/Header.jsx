import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container className=''>
        <Navbar.Brand href="#home">Store App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mail: @Storeapp.com</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Call: 9856665585
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Location:</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                LOGIN
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header