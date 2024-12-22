import React, { useState } from 'react'
import './Delivery.css'



import image1 from '../Assests/Delivery/image1.jpg';
import image2 from '../Assests/Delivery/image2.jpg';
import image3 from '../Assests/Delivery/image3.jpg';
import image4 from '../Assests/Delivery/image4.jpg';
import image5 from '../Assests/Delivery/image5.jpg';
import DeliveryLine from './DeliveryLine';

function Delivery() {
    let [first, setFirst] = useState(false);
    let [second, setSecond] = useState(false);
    let [third, setThird] = useState(false);
    let [fourth, setFourth] = useState(false);
    let [fifth, setFifth] = useState(false);

    return (
        <div className='delivery'>
            <div className="container">
                <DeliveryLine />
                <DeliveryImages first={first} setFirst={setFirst} second={second} setSecond={setSecond} third={third} setThird={setThird} fourth={fourth} setFourth={setFourth} fifth={fifth} setFifth={setFifth} />
            </div>
        </div>
    )
}

export default Delivery



function DeliveryImages({ first, setFirst, second, setSecond, third, setThird, fourth, setFourth, fifth, setFifth }) {
    return (
        <div className="deliveryimages">
            <div className="leftdivimg">
                <div className="topdiv">
                    <div className='topdiv1 image33 image34' onMouseOver={() => { setFirst(true) }} onMouseOut={() => { setFirst(false) }}>
                        <img src={image1} alt="" className='image1' />
                        <p style={{ display: first ? "block" : "none" }}>PERFECT SHOES FOR TRAVEL</p>
                    </div>
                    <div className="topdiv2 image33" onMouseOver={() => { setSecond(true) }} onMouseOut={() => { setSecond(false) }}>
                        <img src={image2} alt="" className='image2' />
                        <p style={{ display: second ? "block" : "none" }}>BOOTS FOR OUTDOOR ADVENTURES</p>
                    </div>
                </div>
                <div className="topdiv">
                    <div className='topdiv2 image33' onMouseOver={() => { setThird(true) }} onMouseOut={() => { setThird(false) }}>
                        <img src={image3} alt="" className='image2 ' />
                        <p style={{ display: third ? "block" : "none" }}>SNEAKERS FOR CASUAL STYLE</p>
                    </div>
                    <div className="topdiv1 image33 image34" onMouseOver={() => { setFourth(true) }} onMouseOut={() => { setFourth(false) }}>
                        <img src={image4} alt="" className='image1' />
                        <p style={{ display: fourth ? "block" : "none" }}>SLIPPERS FOR DAILY COMFORT</p>
                    </div>
                </div>
            </div>
            <div className="rightdivimg image33 image35" onMouseOver={() => { setFifth(true) }} onMouseOut={() => { setFifth(false) }}>
                <img src={image5} alt="" />
                <p style={{ display: fifth ? "block" : "none" }}>SHOES FOR EVERY SURPRISE MOMENT</p>
            </div>
        </div>
    )
}