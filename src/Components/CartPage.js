import React, { useContext, useEffect,useState } from 'react';
import './CartPage.css';
import img from '../Assests/img11.jpg';
import { AiFillDelete } from "react-icons/ai";
import { Cartlists, CartState, MyContextsm, ProductAmounts } from '../index.js';

function CartPage() {
  const { state } = CartState();
  const { statesm, dispatchsm } = useContext(MyContextsm);
  const { cartlists, setCortLists } = useContext(Cartlists);
  const { costAmount, setCostAmount } = useContext(ProductAmounts);

  

  return (
    <div className='cartPage d-flex flex-lg-row flex-md-column flex-sm-column'>
      <div className="cartlistsdiv">
        {
          cartlists.length 
            ? <CartPageProduct 
                carttdetails={cartlists} 
                carttmethod1={setCortLists} 
                dispatchsm1={dispatchsm} 
                costAmount={costAmount}
                setCostAmount={setCostAmount}
              /> 
            : <h2 className='text-center mt-5'>No Cart Items</h2>
        }
      </div>
      <div className="cartlistamount p-3 text-light">
        <h3>SubTotal ({cartlists.length}) Items</h3>
        <h5 className='mt-4'>Total: $ {cartlists.length>0?costAmount:0}</h5>
        <button className='lastbtn'>Proceed To Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;

export function CartPageProduct({ carttdetails, carttmethod1, dispatchsm1, costAmount, setCostAmount }) {
  const handleDelete = (id) => {
    carttmethod1((prev) => prev.filter((item) => item.id !== id)); 
    dispatchsm1((prev) => prev.filter((itemId) => itemId !== id));
  };

  const handlingthebutton = (id, value) => {
    carttmethod1((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(value) || 1 } : item
      )
    );
  };

  useEffect(() => {
    let initialTotal = 0;
    carttdetails.forEach((item) => {
      const quantity = item.quantity || 1; 
      initialTotal += item.price * quantity;
    });
    setCostAmount(initialTotal);
  }, [carttdetails, setCostAmount]);

  return (
    <>
      {carttdetails.map((item) => {
        const { img, name, price, id } = item;
        const quantity = item.quantity || 1;

        return (
          <div key={id} className="cartoneee">
            <div className="cartsmimg">
              <img src={img} alt="" />
            </div>
            <div className='nmprice d-flex flex-lg-row flex-md-row flex-sm-row'>
            <div className="productName">
              <h4>{name}</h4>
            </div>
            <div className="ProductCost">
              <p>${price}</p>
            </div>
            </div>
            <div>
              <select
                name="count"
                className="count"
                value={quantity}
                onChange={(e) => handlingthebutton(id, e.target.value)}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="deletebtnnn">
              <AiFillDelete fontSize="23px" onClick={() => handleDelete(id)} />
            </div>
          </div>
        );
      })}
    </>
  );
}




// import React, { useContext, useEffect, useState } from 'react';
// import './CartPage.css';
// import { AiFillDelete } from "react-icons/ai";
// import { Cartlists, CartState, MyContextsm, ProductAmounts } from '../index.js';

// function CartPage() {
//   const { state } = CartState();
//   const { statesm, dispatchsm } = useContext(MyContextsm);
//   const { cartlists, setCortLists } = useContext(Cartlists);
//   const { costAmount, setCostAmount } = useContext(ProductAmounts);

  
//   return (
//     <div className='cartPage d-flex '>
//       <div className="cartlistsdiv">
//         {
//           cartlists.length
//             ? <CartPageProduct 
//                 carttdetails={cartlists} 
//                 carttmethod1={setCortLists} 
//                 dispatchsm1={dispatchsm} 
            
//               />
//             : <h2 className='text-center mt-5'>No Cart Items</h2>
//         }
//       </div>
//       <div className="cartlistamount p-3 text-light">
//         <h3>SubTotal ({cartlists.length}) Items</h3>
//         <h5 className='mt-4'>Total: $ {99}</h5>  
//         <button className='lastbtn'>Proceed To Checkout</button>
//       </div>
//     </div>
//   );
// }

// export default CartPage;

// export function CartPageProduct({ carttdetails, carttmethod1, dispatchsm1 }) {

//   const handleDelete = (id) => {
//     carttmethod1((prev) => prev.filter((item) => item.id !== id)); 
//     dispatchsm1((prev) => prev.filter((itemId) => itemId !== id));
//   };


//   return (
//     <>
//       {carttdetails.map((item) => {
//         const { img, name, price, id, quantity } = item;
        
//         return (
//           <div key={id} className="cartoneee">
//             <div className='cartsmimg'>
//               <img src={img} alt="" />
//             </div>
//             <div className='productName'>
//               <h4>{name}</h4>
//             </div>
//             <div className='ProductCost'>
//               <p>${price}</p>
//             </div>
//             <div>
//               <select
//                 name="count"
//                 className="count"
//                 value={quantity}
//               >
//               </select>
//             </div>
//             <div className='deletebtnnn'>
//               <AiFillDelete fontSize="23px" onClick={() => handleDelete(id)} />
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// }
