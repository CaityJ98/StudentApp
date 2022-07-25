import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavigationBar() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/marketplace">Marketplace</Nav.Link>
              <NavDropdown title="Student Resources" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Finance">Action</NavDropdown.Item>
                <NavDropdown.Item href="/Health&Wellbeing">
                  Health & Wellbeing 
                </NavDropdown.Item>
                <NavDropdown.Item href="/studytools">Study Tools</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/student-resources-page">
                  Student Resources Page
                </NavDropdown.Item>
                
              </NavDropdown>
              
              
                
                     
                    
            </Nav>
            <Nav.Link className="justify-content-end">
                       <a href="#login">Sign Up</a>
                    </Nav.Link>
   
                    <Nav.Link>
                       <a href="#login">Log In</a>
                    </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavigationBar;