import React from 'react';

function CreateTicket() {
    return ( 
        // we can change the size of icon by fa attribute fa-2x fa-3x.. but default will be similar to the heading
        <div className='container p-4'>
            <p className='pt-5 pb-4 text-muted ' style={{fontSize:"23px"}}>To create a ticket, select a relevant topic</p>
            <div className='row pb-4'>
                <div className='col-4'>
                    <p style={{fontSize:"20px",paddingBottom:"15px"}}><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</p>
                    <div style={{paddingLeft:"16px"}}>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Getting started</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Online</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Offline</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Charges</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Company, Partnership and HUF</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Non Resident Indian (NRI)</p></a>
                    </div>
                </div>
                <div className='col-4'>
                    <p style={{fontSize:"20px",paddingBottom:"15px"}}><i class="fa fa-user-o" aria-hidden="true"></i> Your Zerodha Account</p>
                    <div style={{paddingLeft:"16px"}}>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Login credentials</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Your Profile</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Account modification and segment addition</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>CMR & DP ID</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Nomination</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Transfer and conversion of shares</p></a>
                    </div>
                </div>
                <div className='col-4'>
                    <p style={{fontSize:"20px",paddingBottom:"15px"}}><i class="fa fa-bar-chart" aria-hidden="true"></i> Trading and Markets</p>
                    <div style={{paddingLeft:"16px"}}>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Trading FAQs</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Kite</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Margins</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Product and order types</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Corporate actions</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Kite features</p></a>
                    </div>
                </div>
            </div>
            <div className='row pb-5'>
            <div className='col-4'>
                    <p style={{fontSize:"20px",paddingBottom:"15px"}}><i class="fa fa-credit-card" aria-hidden="true"></i> Funds</p>
                    <div style={{paddingLeft:"16px"}}>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Fund withdrawal</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Adding funds</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Adding bank accounts</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>eMandates</p></a>
                    </div>
                </div>
                <div className='col-4'>
                    <p style={{fontSize:"20px",paddingBottom:"15px"}}><i class="fa fa-circle-o-notch" aria-hidden="true"></i>  Console</p>
                    <div style={{paddingLeft:"16px"}}>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>IPO</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Portfolio</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Funds statement</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Profile</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Reports</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Referral program</p></a>
                    </div>
                </div>
                <div className='col-4'>
                    <p style={{fontSize:"20px",paddingBottom:"15px"}}><i class="fa fa-circle-thin" aria-hidden="true"></i> Coin</p>
                    <div style={{paddingLeft:"16px"}}>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Understanding mutual funds and Coin</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Coin app</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Coin web</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>Transactions and reports</p></a>
                    <a href="" style={{textDecoration:"none", fontSize:"15px",}}><p>National Pension Scheme (NPS)</p></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;