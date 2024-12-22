import React from 'react'
import '../Components/NewItems.css';
import { useState, useEffect, useContext } from 'react'
import { Cartlists, CartState, EachProductItem, MyContextsm } from '../index.js';


import search from '../Assests/search.svg'

import shoping from '../Assests/shopProducts/shopping.svg'
import refesh from '../Assests/shopProducts/refresh.svg'
import zoom from '../Assests/shopProducts/zoom.svg'
import favouite from '../Assests/shopProducts/favouite.svg'
import { NavLink } from 'react-router-dom';

function NewItems() {

    const { dispatch } = CartState();
    const { statesm, dispatchsm } = useContext(MyContextsm);
    const { cartlists, setCortLists } = useContext(Cartlists);

    const [items, setItems] = useState([]);
    const [userinp, setUserin] = useState('');


    const links = [shoping, refesh, zoom, favouite];


    const { EachItem, setEachItem } = useContext(EachProductItem);


    useEffect(() => {
        fetch('NewItems.json')
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
                setItems(result);
            })
            .catch((Error) => {
                console.log("Error is : ", Error);
            })
    }, [])

    const handlethebutton1 = (product) => {
        const { id, name, price, img } = product;

        dispatchsm((prev) =>
            prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
        );

        setCortLists((prev) => {
            const isInCart = prev.some((item) => item.id === id);
            return isInCart ? prev.filter((item) => item.id !== id) : [...prev, { id, name, price, img }];
        });
    };


    return (
        <div className='ShopPage1'>
            <div className='Headtext'>
                <h2>New Items</h2>
                <p>Explore our upcoming collection of trendy, comfortable, and durable footwear. Stay ahead with fresh designs perfect for every occasion!</p>
            </div>
            <div className='searchBar'>
                <input type="text" onChange={(e) => {
                    setUserin(e.target.value);
                }} placeholder='Search Here' />
                <span><img className='searchimg' src={search} alt="" /></span>
            </div>
            <div className='shopPage container'>
                {
                    items && items.length > 0 &&
                    items.filter((e) => {
                        return userinp.toString() === "" ? e : e.name.toString().toLowerCase().includes(userinp.toLowerCase())
                    }).map((e) => {
                        let { id, img, name, price, dummyPrice } = e;
                        const isInCart1 = statesm.includes(id);
                        return (
                            <div key={id} className="one onee ">
                                <div className="imgblock imgblock1" onClick={() => { setEachItem(e); }}>
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
                                    className={isInCart1 ? "addtoCarted" : "addtoCart"}
                                    onClick={() => {
                                        const procuct = { id, name, price, img }
                                        dispatch({
                                            type: isInCart1 ? "REMOVE_FROM_CART" : "ADD_TO_CART",
                                            payload: procuct,
                                        })

                                        // console.log("Product details: ",procuct);
                                        handlethebutton1(procuct)
                                    }

                                    }
                                >
                                    {isInCart1 ? "Remove from Cart" : "Add to Cart"}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewItems
