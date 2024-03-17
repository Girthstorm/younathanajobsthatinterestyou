import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link}  to='/'>Jobs I'm interested in</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link as={Link}  to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/pageOne'>Rivian</Nav.Link>
            <Nav.Link as={Link} to='/pageTwo'>Tesla</Nav.Link>
            <Nav.Link as={Link} to='/pageThree'>Nvidia</Nav.Link>
            <Nav.Link as={Link} to='/pageFour'>Riot</Nav.Link>
            <Nav.Link as={Link} to='/pageFive'>Playstation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
