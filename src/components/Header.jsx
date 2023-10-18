import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
     <Navbar expand="lg" className="bg-dark">
      <Container className=''>
        <Navbar.Brand href="#home" className='text-white fw-bolder '>Store App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto text-white fw-bold" >
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white'>About Us</Nav.Link>
            <NavDropdown menuVariant="dark" title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='text-white'>Mail: @Storeapp.com</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='text-white'>
                Call: 9856665585
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='text-white'>Location:</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='text-white'>
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