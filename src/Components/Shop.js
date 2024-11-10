import React, { useEffect, useState } from 'react'
import './Shop.css';
import p1 from '../Assests/shopProducts/p1.jpg'
import shoping from '../Assests/shopProducts/shopping.svg'
import refesh from '../Assests/shopProducts/refresh.svg'
import zoom from '../Assests/shopProducts/zoom.svg'
import favouite from '../Assests/shopProducts/favouite.svg'
// import ProductDetails from '../Components/ProductDetails.json'

import search from '../Assests/search.svg'

function Shop() {
    const links = [shoping, refesh, zoom, favouite];

    const [searchh, setSearchh] = useState([]);
    const [searchInput, setSearchInput] = useState('');


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
    }, [])
    return (
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
                {searchh &&  searchh.length >0 && 
                    searchh.filter((item) => {
                            return searchInput.toString() === "" ? item : item.name.toString().toLowerCase().includes(searchInput.toLowerCase())
                        })
                        .map((e) => {
                            let { id, img, name, price, dummyPrice } = e;
                            return (
                                <div key={id} className="one">
                                    <div className="imgblock">
                                        <img src={img} alt="" />
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
                                </div>
                            )
                        })
                }
            </div>

        </div>
    )
}

export default Shop
