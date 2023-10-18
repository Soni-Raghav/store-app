import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

const Footer = (props) => {
  return (
    <>

    <Navbar className="bg-dark p-3">
        <Container>
          <Navbar.Brand href="#home" className='text-white text-center m-auto text'>{props.ftext}</Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Footer;