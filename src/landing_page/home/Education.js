import React from 'react';

function Education() {
    return ( //font size is fs.
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media\education.svg' style={{width:"75%"}}/>
                </div>
                <div className='col-6'>
                    <h2 className='mb-5 fs-3'>Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-4'>Trading Q&A, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;