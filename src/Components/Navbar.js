import React from 'react'
import './Navbar.css'
import logo from '../Assests/logoo.png'

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar d-flex'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className='ms-auto '>
            <ul className='d-flex uldiv mt-3 me-5'>
                <NavLink  className="uldiv1" to="Home">Home</NavLink>
                <NavLink className="uldiv1" to="Shop">Shop</NavLink>
                <NavLink className="uldiv1" to="About">About</NavLink>
                <NavLink className="uldiv1" to="Contact">Contact</NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
