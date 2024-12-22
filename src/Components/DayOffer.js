import React, { useEffect, useState } from 'react'
import './DayOffer.css'
import imgg from '../Assests/Delivery/offer4.jpg'

import rightarrow from '../Assests/Delivery/rightArrow.svg';
import leftarrow from '../Assests/Delivery/leftArrow.svg';
import img1 from '../Assests/Delivery/img1.png';
import img4 from '../Assests/Delivery/img4.png'

function DayOffer() {
    const [second, setSecond] = useState(59);
    const [minute, setMinute] = useState(59);
    const [hour, sethour] = useState(23);
    const [day, setday] = useState(29);

    const style = {
        filter: "invert(53%) sepia(81%) saturate(1000%) hue-rotate(-25deg) brightness(1.05)"
    }
    const style1 = {
        filter: "invert(1)"
    }
    const [change, setChange] = useState(true);
    const [changecolor, setChangecolor] = useState(false);
    const [changecolor1, setChangecolor1] = useState(false);
    // useEffect(() => {
    //     let secondsinterval = setInterval(() => {
    //         setSecond((prevsecond) => prevsecond > 1 ? prevsecond - 1 : 59);
    //     }, 1000)
    //     let minutesinterval = setInterval(() => {
    //         setMinute((prevminute) => prevminute > 1 ? prevminute - 1 : 59);
    //     }, 59000);
    //     let hoursinterval = setInterval(() => {
    //         sethour((prevhour) => prevhour > 1 ? prevhour - 1 : 23);
    //     }, 3481000);
    //     let daysinterval = setInterval(() => {
    //         setday((prevday) => prevday > 1 ? prevday - 1 : 0);
    //     }, 80063000);
    //     return () => {
    //         clearInterval(secondsinterval);
    //         clearInterval(minutesinterval);
    //         clearInterval(hoursinterval);
    //         clearInterval(daysinterval);
    //     };
    // }, [])

    return (
        <div className='dayOffer'>
            <div className="leftside">
                <img src={imgg} alt="" />
                <div className="innercontent">
                    <h2 className='deal'>Exclusive Hot Deal Ends Soon!</h2>
                    <p className='dealp'>Who are in extremely love with eco friendly system.</p>
                    <div className="timingBox">
                        <div className="timebox">
                            <div className="time">
                                <h1>{day}</h1>
                                <p>Days</p>
                            </div>
                            <div className="time">
                                <h1>{hour}</h1>
                                <p>Hours</p>
                            </div>
                            <div className="time">
                                <h1>{minute}</h1>
                                <p>Minutes</p>
                            </div>
                            <div className="time timelast">
                                <h1>{second}</h1>
                                <p>Seconds</p>
                            </div>
                        </div>
                    </div>
                    <button>Show Now</button>
                </div>
            </div>
            <div className="rightside">
                <div className="sideright" onMouseOver={() => { setChangecolor(true) }} onMouseOut={() => { setChangecolor(false) }} onClick={() => { setChange(!change) }}>
                    <p style={{ color: changecolor ? "orange" : "grey" }}>Previous</p>
                    <img style={changecolor ? style : style1} className='leftarrow' src={leftarrow} alt="" />
                </div>
                <div className="sideright">
                    <div className="divcenter">
                        <img src={change ? img1 : img4} alt="" />
                        <p>{change ? "$150.00" : "$170.00"} <span className='dummy'>{change ? "$220.00" : "$240.00"}</span></p>
                        <h3>{change ? "Perfect blend of unmatched" : "Perfect blend of comfort and"}</h3>
                        <h3>{change ? "style and elegance, redefining" : "support, ensuring all-day"}</h3>
                        <h3>{change ? "everyday fashion." : "effortless wear."}</h3>
                        <button>Show Now</button>
                    </div>
                </div>
                <div className="sideright" onMouseOver={() => { setChangecolor1(true) }} onMouseOut={() => { setChangecolor1(false) }} onClick={() => { setChange(!change) }}>
                    <p style={{ color: changecolor1 ? "orange" : "grey" }}>Next</p>
                    <img style={changecolor1 ? style : style1} className='rightarrow' src={rightarrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DayOffer
