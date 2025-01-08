import React from 'react';

function Hero() {
    return (
      <div className='container p-5 text-center'>
        <div className='row'>
        <h1 style={{paddingTop:"30px",paddingBottom:"10px"}}>Zerodha Products</h1>
        <p style={{fontSize:"20px"}}>Sleek, modern, and intuitive trading platforms</p>
        <p style={{paddingBottom:"100px"}}>Check out our <a href="#" style={{textDecoration:"none"}}>investment offerings &rarr;</a></p>
        <hr />
        </div>
      </div>
      );
}

export default Hero;