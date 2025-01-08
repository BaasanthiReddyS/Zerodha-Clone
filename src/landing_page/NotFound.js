import React from 'react';

function NotFound() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 text-muted' style={{paddingTop:"280px",paddingBottom:"280px",paddingLeft:"120px"}}>
                    <h3 className='pb-4'>404</h3>
                    <h1 className='pb-3' style={{fontSize:"50px"}}>Kiaan couldn't find that page</h1>
                    <p style={{fontSize:"22px",}}>We couldn't find the page you were looking for. Visit <a style={{textDecoration:"none"}} href='#'>Zerodha's home page</a></p>
                </div>
                <div className='col-6 mt-5 mb-5' style={{padding:"40px"}}>
                    <img src="media\kiaan404.jpg" />
                </div>
            </div>
        </div>
     );
}

export default NotFound;