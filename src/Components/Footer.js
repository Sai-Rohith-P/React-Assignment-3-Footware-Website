import React from 'react'
import './Footer.css'
import rightarrow from '../Assests/Delivery/rightArrow.svg'

import img1 from '../Assests/footer/img11.jpg';
import img2 from '../Assests/footer/img22.jpg';
import img3 from '../Assests/footer/img33.jpg';
import img4 from '../Assests/footer/img44.jpg';
import img5 from '../Assests/footer/img55.jpg';
import img6 from '../Assests/footer/img66.jpg';
import img7 from '../Assests/footer/img77.jpg';
import img8 from '../Assests/footer/img88.jpg';

function Footer() {
    return (
        <div className='footer'>
            <div className="top">
                <div className="divs ">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                </div>
                <div className="divs ">
                    <h3>Newsletter</h3>
                    <p>Stay update with our latest</p>
                    <div className="inputt" >
                        <input type="email" placeholder='Enter Email..' />
                        <div className="imgg">
                            <img src={rightarrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className="divs ">
                    <h3>Instragram Feed</h3>
                    <div className="imgdivs">
                        <img src={img1} alt="" />
                        <img src={img4} alt="" />
                        <img src={img6} alt="" />
                        <img src={img5} alt="" />
                        <img src={img7} alt="" />
                        <img src={img8} alt="" />
                        <img src={img3} alt="" />
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className="divs ">
                    <h3>Let us be social</h3>
                    <p>Let us be social</p>
                    <div className="smedia">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-square-twitter"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p>Copyright 02024 All rights reserved I This Website is made with Love by Rohith Sai.</p>
            </div>
        </div>
    )
}

export default Footer
