import React, { useContext, useState } from 'react'
import './EachProduct.css'
import { Cartlists, CartState, EachProductItem, MyContextsm } from '../index.js'
import ratingimg from '../Assests/ratingImg.png'
import { BiBorderBottom } from 'react-icons/bi';

import rohith from '../Assests/Rohith2.jpg';
import anil from '../Assests/Anil.png';
import tarun from '../Assests/Tarun.png';
import reply from '../Assests/reply.png'
import Delivery from './Delivery.js';
import Footer from './Footer.js';

function EachProduct() {

    const { dispatch } = CartState();
    const { statesm, dispatchsm } = useContext(MyContextsm);
    const { cartlists, setCortLists } = useContext(Cartlists);




    const [searchh, setSearchh] = useState([]);
    // let { id, img, name, price, dummyPrice } = searchh;
    const { EachItem, setEachItem } = useContext(EachProductItem);

    let { id, name, img, price, dummyPrice } = EachItem;
    const isInCart = statesm.includes(id);
    const [count, setCount] = useState(1);

    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    const increment = () => {
        if (count > 0 && count < 10) {
            setCount(count + 1);
        }
    }


    const oneFunction = () => {
        setOne(true);
        setTwo(false);
        setThree(false);
    }
    const twoFunction = () => {
        setTwo(true);
        setOne(false);
        setThree(false);
    }
    const threeFunction = () => {
        setThree(true);
        setOne(false);
        setTwo(false);
    }

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

    return (
        <>
            <div className='EachProductPage'>
                <div className="eachProductTop">
                    <div className="imgleft">
                        <img src={img} alt="" />
                    </div>
                    <div className="contentright">
                        <h2 className='name'>{name}</h2>
                        <div>
                            <img className="Ratingimg" src={ratingimg} alt="" />
                        </div>
                        <p className='Price'>${price} <span className='dummypricee'>${dummyPrice}</span></p>
                        <p className='paraContent'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <hr />
                        <div className="quantityblock">
                            <div className="quantity">
                                <h3>Quantity</h3>
                                <div className='quantityCount'>
                                    <p className='plus' onClick={() => { increment() }}>+</p>
                                    <p className='countdigit'>{count}</p>
                                    <p className='minus' onClick={() => { decrement() }}>-</p>
                                </div>
                            </div>
                            <div className='size'>
                                <h3>Size</h3>
                                <select name="Choose Size" id="">
                                    <option value="Choose Size">Choose Size</option>
                                    <option value="Extra Small">Extra Small</option>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                </select>
                            </div>
                        </div>
                        <h3 className='stock'>Stock : Available</h3>

                        <div className="button1">
                            <button
                                className={isInCart ? "addtoCarted" : "addtoCart"}
                                onClick={() => {
                                    const procuct = { id, name, price, img }
                                    dispatch({
                                        type: isInCart ? "REMOVE_FROM_CART" : "ADD_TO_CART",
                                        payload: procuct,
                                    })
                                    handlethebutton(procuct)
                                }

                                }
                            >
                                {isInCart ? "Remove from Cart" : "Add to Cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ReviewsBlock">
                <div className="container">
                    <div className="Reviewsname">
                        <h5 style={{ borderBottom: one ? "2px solid orange" : "none", paddingBottom: one ? "15px" : "" }} onClick={() => { oneFunction() }}>Description</h5>
                        <h5 style={{ borderBottom: two ? "2px solid orange" : "none", paddingBottom: two ? "15px" : "" }} onClick={() => { twoFunction() }}>Additional Info</h5>
                        <h5 style={{ borderBottom: three ? "2px solid orange" : "none", paddingBottom: three ? "15px" : "" }} onClick={() => { threeFunction() }}>Reviews (03)</h5>
                    </div>
                    <div className="content">
                        {one ? <Onefun /> : ""}
                        {two ? <Twofun /> : ""}
                        {three ? <Threefun /> : ""}
                    </div>
                </div>
            </div>
            <Delivery />
            <Footer />
        </>
    )
}

export default EachProduct

function Threefun() {
    const dataa = [
        {
            img: rohith,
            name: "Rohith Sai",
            time: "31 January, 2024",
            description: "These shoes are a game-changer! The lightweight build makes them perfect for long days on my feet, while the non-slip sole gives me confidence on any surface. The modern design is versatile enough for work or casual outings. They’ve exceeded my expectations in both style and functionality. I’ll definitely buy another pair soon!"
        },
        {
            img: tarun,
            name: "Tarun Vegi",
            time: "05 Octbar, 2024",
            description: "I absolutely love these shoes! They provide the perfect combination of comfort and style. I use them for both casual wear and workouts, and they never disappoint. The cushioning feels amazing, and the durability is outstanding. Plus, I’ve received so many compliments on the sleek design. These shoes are worth every penny!"
        }, {
            img: anil,
            name: "Anil",
            time: "10 May, 2024",
            description: "Outstanding shoes for both style and performance! I wear these for intense workouts, and they provide incredible support and comfort. The breathable material keeps my feet fresh, even during long hours. The design is super trendy and works for casual outings too. I couldn’t ask for a better pair of shoes!"
        }
    ]
    return (
        <>
            <h5>Reviews (03)</h5>
            {
                dataa.map((e) => {
                    const { img, name, time, description } = e;
                    return (
                        <div className="personone">
                            <div className="imgdivvv">
                                <img src={img} alt="" />
                            </div>
                            <div className="contentdivv">
                                <h4>{name}</h4>
                                <p>{time}</p>
                                <p>{description}</p>
                                <h4 className='replyC'><img className='reply' src={reply} alt="" />Reply</h4>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
function Onefun() {
    return (
        <>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            <div className="rev">
                <div className="onee">
                    <h5>Features</h5>
                    <ul>
                        <li>Comfortable Fit</li>
                        <li>Durable Material</li>
                        <li>Stylish Design</li>
                        <li>Lightweight Build</li>
                        <li>Slip-Resistant Sole</li>
                    </ul>
                </div>
                <div className="onee">
                    <h5>Specifications</h5>
                    <ul>
                        <li><span className='spann'>Meterial : </span><span> Leather, Cotton, Rubber, Foam</span></li>
                        <li><span className='spann'>Model Year : </span><span>2024</span></li>
                        <li><span className='spann'>Available Sizes : </span><span>8.5, 9.0, 9.5, 10.0</span></li>
                        <li><span className='spann'>Available Colors : </span><span>White/Red/Blue,Black/Orange/Green</span></li>
                        <li><span className='spann'>Made In: </span><span>INDIA</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}


function Twofun() {
    return (
        <>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            <div className="rev">
                <div className="onee">
                    <h5>Shipping Options :</h5>
                    <ul>
                        <li><span className='spann'>Standard : </span><span> 6-7 Days, Shipping Cost - Free</span></li>
                        <li><span className='spann'>Express :</span><span>1-2 Days, Shipping Cost - $20</span></li>
                        <li><span className='spann'>Courier : </span><span>2-3 Days, Shipping Cost - $30</span></li>
                        <li><span className='spann'>Fastgo : </span><span>1-3 Days, Shipping Cost - $15</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
