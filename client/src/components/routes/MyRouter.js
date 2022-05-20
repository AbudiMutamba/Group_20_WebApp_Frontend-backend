import React from 'react';

import Navbar from '../partial/Navbar';

import Home from '../views/Home';

import Weather from '../views/Weather';

import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Contact from '../views/Contact';

import International from '../views/International';

import Footer from '../partial/Footer';

export default function MyRouter() {
    return (
        <>
        <Navbar />

        <Router basename='/'>
            <Routes>
                <Route path='/' element= {<Home />} />
                <Route path='/home' element= {<Home />} />
                <Route path='/weather' element= {<Weather/>} />
                <Route path='/contact' element= {<Contact/>} />
                <Route path='/international' element= {<International/>} />
            </Routes>
        </Router>

        <Footer />

        </>
        
    )
}
