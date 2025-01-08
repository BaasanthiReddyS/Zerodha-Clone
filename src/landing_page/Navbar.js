import React from 'react';

import {Link} from "react-router-dom"; //remember this is react thing used instead of anchor tag.

function Navbar() {
    return ( 
        // get a navbar template from bootstrap.
        // edit it later also. the code of html does not come with closing single tags so close it manually.
        <nav style={{backgroundColor:"white",borderBottom:"1.5px solid lightgray",position:"fixed",width:"100%"}}>
        <div className='container p-4'>
                <div className='row'>
                <div className='col-6'>
                    <Link class="navbar-brand" to="/"><img src='media\logo.svg' style={{width:"25%"}}/></Link>
                </div>
                <div className='col-6'>
                    <div className='row' style={{fontSize:"15px"}}>
                        <div className='col-1'></div>
                        <div className='col-1'><Link to="/signup" style={{textDecoration:"none",color:"gray"}}>Signup</Link></div>
                        <div className='col-1'></div>
                        <div className='col-1'><Link to="/about" style={{textDecoration:"none",color:"gray"}}>About</Link></div>
                        <div className='col-1'></div>
                        <div className='col-1'><Link to="/product" style={{textDecoration:"none",color:"gray"}}>Product</Link></div>
                        <div className='col-1'></div>
                        <div className='col-1'><Link to="/pricing" style={{textDecoration:"none",color:"gray"}}>Pricing</Link></div>
                        <div className='col-1'></div>
                        <div className='col-1'><Link to="/support" style={{textDecoration:"none",color:"gray"}}>Support</Link></div>
                        <div className='col-1'></div>
                        <div className='col-1'><a href='#' style={{textDecoration:"none",color:"#424242"}}><i class="fa fa-bars" aria-hidden="true" style={{fontSize:"20px"}}></i></a></div>
                    </div>
                </div>
                </div>
            
        </div>
        </nav>
     );
}

export default Navbar;