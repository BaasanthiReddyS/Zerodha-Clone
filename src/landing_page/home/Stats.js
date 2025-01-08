import React from 'react';

function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6 ' style={{fontSize:"89%", color:"#424242"}}>
                    <h2 className='pb-5'>Trust with confidence</h2>
                    <h4>Customer-first always</h4>
                    <p className='text-muted pb-3' style={{fontSize:"16px"}}>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h4>No spam or gimmicks</h4>
                    <p className='text-muted pb-3'style={{fontSize:"16px"}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h4>The Zerodha universe</h4>
                    <p className='text-muted pb-3'style={{fontSize:"16px"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4>Do better with money</h4>
                    <p className='text-muted pb-3'style={{fontSize:"16px"}}>With initiatives like <a href='#' style={{textDecoration:"none"}}>Nudge</a> and <a href='#' style={{textDecoration:"none"}}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 mt-5 p-5'>
                    <img src='media\ecosystem.png' style={{width:"98%"}}/>
                    <div className='row'>
                        <div className='col-6'>
                        <a href='' style={{textDecoration:"none", marginLeft:"50px",}}>explore our prdt &rarr;</a>
                        </div>
                        <div className='col-6'>
                        <a href='' style={{textDecoration:"none"}}>explore <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;