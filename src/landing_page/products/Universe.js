import React from 'react';

function Universe() {
    return ( 
        <div className='container p-5 text-center text-muted'>
            <p style={{fontSize:"22px",}}>Want to know more about our technology stack? Check out the <a href="#" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
            <div className="row text-center p-5">
                <h1 className='p-4'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row'>
                <div className='col-4 text-center p-5'>
                    <a href="#" style={{textDecoration:"none"}}>
                    <img src="media\zerodhaFundhouse.png" style={{width:"80%" , paddingBottom:"18px",paddingLeft:"15px"}}/>
                    <p className='text-muted' style={{fontSize:"13px",paddingLeft:"15px"}}>Our asset management venture <br/>that is creating simple and transparent index funds to help you save for your goals.</p>
                    </a>
                </div>
                <div className='col-4 text-center p-5'>
                    <a href="#" style={{textDecoration:"none"}}>
                    <img src="media\sensibullLogo.svg" style={{width:"80%" , paddingBottom:"18px",paddingLeft:"15px"}}/>
                    <p className='text-muted' style={{fontSize:"13px",paddingLeft:"15px"}}>Our asset management venture <br/>that is creating simple and transparent index funds to help you save for your goals.</p>
                    </a>
                </div>
                <div className='col-4 text-center p-5'>
                    <a href="#" style={{textDecoration:"none"}}>
                    <img src="media\tijori.svg" style={{width:"70%" , paddingBottom:"18px",paddingLeft:"15px"}}/>
                    <p className='text-muted' style={{fontSize:"13px",paddingLeft:"15px"}}>Our asset management venture <br/>that is creating simple and transparent index funds to help you save for your goals.</p>
                    </a>
                </div>
            </div>
            <div className='row'>
                <div className='col-4 text-center'>
                    <a href="#" style={{textDecoration:"none"}}>
                    <img src="media\streakLogo.png" style={{width:"63%" , paddingBottom:"18px",paddingLeft:"15px"}}/>
                    <p className='text-muted' style={{fontSize:"13px",paddingLeft:"25px"}}>Our asset management venture <br/>that is creating simple and transparent index <br/> funds to help you save for your goals.</p>
                    </a>
                </div>
                <div className='col-4 text-center'>
                    <a href="#" style={{textDecoration:"none"}}>
                    <img src="media\smallcaseLogo.png" style={{width:"63%" , paddingBottom:"18px",paddingLeft:"15px"}}/>
                    <p className='text-muted' style={{fontSize:"13px",paddingLeft:"25px"}}>Our asset management venture <br/>that is creating simple and transparent index <br/> funds to help you save for your goals.</p>
                    </a>
                </div>
                <div className='col-4 text-center'>
                    <a href="#" style={{textDecoration:"none"}}>
                    <img src="media\dittoLogo.png" style={{width:"43%" , paddingBottom:"18px",paddingLeft:"15px"}}/>
                    <p className='text-muted' style={{fontSize:"13px",paddingLeft:"25px"}}>Our asset management venture <br/>that is creating simple and transparent index <br/> funds to help you save for your goals.</p>
                    </a>
                </div>
                <div className='row pt-5'>
                <button className='p-2 mt-4 mb-5 btn btn-primary fs-5' style={{margin:"0 auto",width:"20%",}}>Sign Up for Free</button>
                </div>
            </div>
        </div>
     );
}

export default Universe;