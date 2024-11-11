// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import Navbars from './Components/Navbar';
import Shop from './Components/Shop';
import ContactPage from './Components/ContactPage';
import AboutUsPage from './Components/AboutUsPage';

function App() {
  return (
    <>
      <Navbars />
      
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Contact' element={<ContactPage />}/>
        <Route path='/About' element={<AboutUsPage />}/>

      </Routes>
    </>
  );
}

export default App;
