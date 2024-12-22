// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import Navbars from './Components/Navbar';
import Shop from './Components/Shop';
// import ContactPage from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import CartPage from './Components/CartPage';
import ShopPage from './Components/ShopPage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import NewItems from './Components/NewItems';
import NewItemsPage from './Components/NewItemsPage';
import EachProduct from './Components/EachProduct';

function App() {
  return (
    <>
      <Navbars />
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='Home/ele' element={<EachProduct />} />
        <Route path='/Shop' element={<ShopPage />} />
        <Route path='shop/ele' element={<EachProduct />} />
        <Route path='/NewItems' element={<NewItemsPage />} />
        <Route path='NewItems/ele' element={<EachProduct />} />
        <Route path='/CartPage' element={<CartPage />} />
        <Route path='/Contact' element={<ContactPage />} />
        <Route path='/About' element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
