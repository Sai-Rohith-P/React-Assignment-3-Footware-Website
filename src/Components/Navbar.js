import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assests/logoo.png';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, Dropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Cartlists, CartState, MyContextsm } from '../index.js';
import { AiFillDelete } from "react-icons/ai";
import img1 from '../Assests/img11.jpg'

function Navbars() {
  const { state } = CartState();
  const { statesm, dispatchsm } = useContext(MyContextsm);
  const { cartlists, setCortLists } = useContext(Cartlists);
  return (
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
              <NavLink to="NewItems" className='uldiv1'>New Items</NavLink>
              <NavLink to="About" className='uldiv1'>About</NavLink>
              <NavLink to="Contact" className='uldiv1'>Contact</NavLink>
            </Nav>
            <Dropdown className='me-4 btnn'>
              <Dropdown.Toggle style={{ backgroundColor: "orange", border: "none" }} id="dropdown-basic">
                <FaShoppingCart color="white" fontSize="19px" />
                <span style={{ marginLeft: "5px" }}>{cartlists.length}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className='cartone2 '>
                <div >
                  <CartList cartt={cartlists} carttmethod={setCortLists} dispatchsm={dispatchsm} />
                  <NavLink to="CartPage" style={{ marginLeft: cartlists.length ? "14px" : "7px" }}><button>Check Out</button></NavLink>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbars

export function CartList({ cartt, carttmethod, dispatchsm }) {

  const handleDelete = (id) => {
    carttmethod((prev) => prev.filter((item) => item.id !== id));
    dispatchsm((prev) => prev.filter((itemId) => itemId !== id));
  };
  return (
    <>
      {cartt.map((item) => {
        const { img, name, price, id } = item;
        return (
          <div key={id}>
            <div className="cartonee d-flex flex-lg-row flex-md-row flex-sm-row gap-3 m-3">
              <div className="cartimgg">
                <img src={img} alt="cart-item" />
              </div>
              <div className="cartname">
                <h4>{name}</h4>
                <p>${price}</p>
              </div>
              <div className="ms-auto me-2" style={{ cursor: "pointer" }}>
                <AiFillDelete fontSize="21px" onClick={() => handleDelete(id)} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}




