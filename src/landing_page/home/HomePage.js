import React from 'react';
import Hero from './Hero'; //same file
import Awards from './Awards';
import Stats from './Stats';
import Education from './Education';
import Pricing from './Pricing';

import OpenAccount from '../OpenAccount';// same folder
import Navbar from '../Navbar';
import Footer from '../Footer';



function HomePage() {
    return ( 
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            
        </>
     );
}

export default HomePage;