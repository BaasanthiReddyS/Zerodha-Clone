import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';

import HomePage from './landing_page/home/HomePage'; // inside many brach maybe.
import Signup from "./landing_page/signup/Signup";
import About from "./landing_page/about/About";
import Product from "./landing_page/products/Product";
import Pricing from "./landing_page/pricing/Pricing";
import Support from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <Route></Route> ia same as <Route/> ..
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/about" element={<About/>}/> 
    <Route path="/product" element={<Product/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/support" element={<Support/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer />
  </BrowserRouter>
  
);


