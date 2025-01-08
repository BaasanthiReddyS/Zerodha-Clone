import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className='row p-5 text-center fs-5 text-muted'>
                <h1 style={{paddingTop:"55px"}}>Pricing</h1>
                <p style={{paddingTop:"12px",paddingBottom:"75px"}}>Free equity investments and flat ₹20 intraday and F&O trades</p>
                <hr/>
            </div>
            <div className='row p-5 text-center text-muted'>
                <div className='col-4 p-3'>
                    <img src="media\pricing0.svg" style={{width:"80%"}}/>
                    <h3 style={{paddingBottom:"10px"}}>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src="media\other-trades.svg" style={{width:"80%"}}/>
                    <h3 style={{paddingBottom:"10px"}}>Intraday and F&O trades</h3>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src="media\pricing0.svg" style={{width:"80%"}}/>
                    <h3 style={{paddingBottom:"10px"}}>Free direct MF</h3>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;