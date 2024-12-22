import React from 'react'
import './AboutUs.css'
import img from '../Assests/aboutpageshoes.jpg'

function AboutUs() {
    return (
        <div className='aboutpage d-flex flex-lg-row flex-md-column flex-sm-column align-items-center justify-content-evenly'>
            <div className='abouttext'>
                <h1>About Us</h1>
                <p>We provide stylish, comfortable, and durable footwear for every occasion, blending quality craftsmanship with modern designs to suit all.</p>
                <div className='buttonss'>
                    <button className='shop'>Shop</button>
                    <button className='explore'>Explore</button>
                </div>
            </div>
            <div className='img'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default AboutUs
