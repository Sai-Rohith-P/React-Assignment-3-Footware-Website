import React from 'react'

import delivery from '../Assests/Delivery/delivaryTruck.svg';
import support from '../Assests/Delivery/support.svg';
import refresh from '../Assests/Delivery/refresh.svg';
import database from '../Assests/Delivery/database.svg';

function DeliveryLine() {
    let data = [
        {
            img: delivery,
            h1data: "Free Delivery",
            pdata: "Fast and Free Shipping"
        },
        {
            img: refresh,
            h1data: "Return Policy",
            pdata: "30-Day Return Policy"
        },
        {
            img: support,
            h1data: "24/7 Support",
            pdata: "Non-Stop Customer Support"
        },
        {
            img: database,
            h1data: "Secure Payment",
            pdata: "Your Payment is Protected"
        }
    ]
    return (
        <div className="divdelivery">
            {
                data.map((eachh) => {
                    let { img, h1data, pdata } = eachh;
                    return (
                        <div className="divone">
                            <img src={img} alt="" />
                            <h4>{h1data}</h4>
                            <p>{pdata}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DeliveryLine
