import React, { useEffect, useState, useContext } from 'react'
import './Shop.css';
import p1 from '../Assests/shopProducts/p1.jpg'
import shoping from '../Assests/shopProducts/shopping.svg'
import refesh from '../Assests/shopProducts/refresh.svg'
import zoom from '../Assests/shopProducts/zoom.svg'
import favouite from '../Assests/shopProducts/favouite.svg'
import { Cartlists, CartState, EachProductItem, MyContextsm } from '../index.js';

import search from '../Assests/search.svg'
import { NavLink } from 'react-router-dom';



function Shop() {

    const { dispatch } = CartState();
    const { statesm, dispatchsm } = useContext(MyContextsm);
    const { cartlists, setCortLists } = useContext(Cartlists);

    const { EachItem, setEachItem } = useContext(EachProductItem);

    const links = [shoping, refesh, zoom, favouite];
    // const [cart, setcart] = useState([]);
    const [searchh, setSearchh] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const handlethebutton = (product) => {
        const { id, name, price, img } = product;

        dispatchsm((prev) =>
            prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
        );

        setCortLists((prev) => {
            const isInCart = prev.some((item) => item.id === id);
            return isInCart ? prev.filter((item) => item.id !== id) : [...prev, { id, name, price, img }];
        });
    };


    useEffect(() => {
        fetch('ProductDetails.json')
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
                setSearchh(result);
            })
            .catch((Error) => {
                console.log("Error is : ", Error);
            })
    })
    return (
        <>
            <div className='ShopPage1'>
                <div className='Headtext'>
                    <h2>Latest Products</h2>
                    <p>Discover our latest collection of stylish, comfortable, and durable footwear. Step up your game with trendy designs perfect for every occasion!</p>
                </div>
                <div className='searchBar'>
                    <input type="text" onChange={(e) => {
                        setSearchInput(e.target.value);
                    }} placeholder='Search Here' />
                    <span><img className='searchimg' src={search} alt="" /></span>
                </div>
                <div className='shopPage'>
                    {searchh && searchh.length > 0 &&
                        searchh.filter((item) => {
                            return searchInput.toString() === "" ? item : item.name.toString().toLowerCase().includes(searchInput.toLowerCase())
                        })
                            .map((e) => {
                                let { id, img, name, price, dummyPrice } = e;
                                const isInCart = statesm.includes(id);

                                return (
                                    <div key={id} className="one" >
                                        <div className="imgblock" onClick={() => { setEachItem(e); }}>
                                            <NavLink to="ele" ><img src={img} alt="" /></NavLink>
                                        </div>
                                        <h3>{name}</h3>
                                        <h3>${price} <span className='dammy'>${dummyPrice}</span></h3>
                                        <div className='links d-flex gap-3'>
                                            {
                                                links.map((e, index) => {
                                                    return (
                                                        <div key={index} className="imgone">
                                                            <img src={e} alt="" />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <button
                                            className={isInCart ? "addtoCarted" : "addtoCart"}
                                            onClick={() => {
                                                const procuct = { id, name, price, img }
                                                dispatch({
                                                    type: isInCart ? "REMOVE_FROM_CART" : "ADD_TO_CART",
                                                    payload: procuct,
                                                })

                                                // console.log("Product details: ",procuct);
                                                handlethebutton(procuct)
                                            }

                                            }
                                        >
                                            {isInCart ? "Remove from Cart" : "Add to Cart"}
                                        </button>

                                    </div>
                                )
                            })
                    }
                </div>

            </div>
        </>
    )
}

export default Shop
