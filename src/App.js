import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import MensFashion from './pages/MensFashion';
import WomensFashion from './pages/WomensFashion';
import Blogs from './pages/Blogs';
import FlashSales from './pages/FlashSales';
import BeSeProducts from './pages/BeSeProducts';
import TrackOrders from './pages/TrackOrders';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Login from './pages/Login';
import TrackOrderDet from './pages/TrackOrderDet';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='blogs' element={<Blogs/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='productDetails' element={<ProductDetails/>} />
            <Route path='mensFashion' element={<MensFashion/>} />
            <Route path='mensFashion/:category' element={<MensFashion/>} />
            <Route path='womensFashion' element={<WomensFashion/>} />
            <Route path='womensFashion/:category' element={<WomensFashion/>} />
            <Route path='flashSales' element={<FlashSales/>} />
            <Route path='bestSellingProducts' element={<BeSeProducts/>} />
            <Route path='trackOrders' element={<TrackOrders/>} />
            <Route path='trackOrders/:id' element={<TrackOrderDet/>} />
            <Route path='wishlist' element={<Wishlist/>} />
            <Route path='cart' element={<Cart/>} />
            <Route path='myProfile' element={<MyProfile/>} />
            <Route path='login' element={<Login/>} />
          </Route>           
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
