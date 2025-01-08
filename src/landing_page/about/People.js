import React from 'react';

function People() {
    return ( 
        <div className='container p-5 text-muted'>
            <h1 className='text-center pb-3'>People</h1>
            <div className='row p-5' >
                <div className='col-5 text-center'>
                    <img src='media\nithinKamath.jpg' style={{width:"80%", borderRadius:"100%",}} />
                    <h5 style={{ paddingTop:"35px",paddingBottom:"12px"}}>Nithin Kamath</h5>
                    <p>Founder, CEO</p>
                    
                </div>
                <div className='col-7' style={{fontSize:"17px",paddingTop:"20px",}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='#' style={{textDecoration:"none"}}>Homepage</a> / <a href='#' style={{textDecoration:"none"}}>TradingQnA</a> / <a href='#' style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default People;