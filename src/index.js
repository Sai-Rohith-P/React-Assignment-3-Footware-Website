import React, { useContext, useReducer, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const MyContext = React.createContext();
export const MyContextsm = React.createContext();
export const Cartlists = React.createContext();
export const ProductAmounts = React.createContext()
// Reducer Function
const CartReduce = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

function AppComponents() {
  const [state, dispatch] = useReducer(CartReduce, []);
  const [statesm, dispatchsm] = useState([]);

  const [cartlists, setCortLists] = useState([]);

  const [costAmount,setCostAmount] = useState(0)

  return (
    <BrowserRouter>
      <MyContext.Provider value={{ state, dispatch }}>
        <MyContextsm.Provider value={{ statesm, dispatchsm }}>
        <Cartlists.Provider value={{ cartlists, setCortLists }}>
          <ProductAmounts.Provider value={{costAmount,setCostAmount}}>
          <App />
          </ProductAmounts.Provider>
      </Cartlists.Provider>
        </MyContextsm.Provider>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export const CartState = () => {
  return useContext(MyContext);
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponents />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
