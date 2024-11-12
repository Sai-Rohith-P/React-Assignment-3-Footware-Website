import React from 'react';
import './Navbar.css';
import logo from '../Assests/logoo.png';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    // <div className='Navbar d-flex'>
    //   <div className='logo'>
    //     <img src={logo} alt="" />
    //   </div>
    //   <div className='ms-auto '>
    //     <ul className='d-flex uldiv mt-3 me-5'>
    //       <NavLink className="uldiv1" to="Home">Home</NavLink>
    //       <NavLink className="uldiv1" to="Shop">Shop</NavLink>
    //       <NavLink className="uldiv1" to="About">About</NavLink>
    //       <NavLink className="uldiv1" to="Contact">Contact</NavLink>
    //     </ul>
    //   </div>
    // </div>
    <>
      <Navbar expand="lg" className="bg-body-tertiary d-flex Navbar">
        <Container>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto className='d-flex uldiv mt-2 me-5">
              <NavLink to="Home" className='uldiv1'>Home</NavLink>
              <NavLink to="Shop" className='uldiv1'>Shop</NavLink>
              <NavLink to="About" className='uldiv1'>About</NavLink>
              <NavLink to="Contact" className='uldiv1'>Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbars






