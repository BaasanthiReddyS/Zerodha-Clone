import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5'>
            <div className='row mb-5'>
                <div className='col-5'>
                    <h1 style={{fontSize:"35px",color:"#424242", marginBottom:"30px",}}>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India.Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-1'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col-6 border p-3'>
                            <h1 className='mb-4'>&#8377;0</h1>
                            <p>Free equity delivery and <br/>direct mutual funds</p>
                        </div>
                        <div className='col-6 border p-3'>
                            <h1 className='mb-4'>&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;