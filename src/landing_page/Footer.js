import React from 'react';

function Footer() {
    return (  
        // use alt key to write multiple lines at once. this is not working in mine.
        <footer style={{backgroundColor:"whitesmoke",}}>
        <div className='container'>
            <div className='row pt-5'>
                <div className='col-3'>
                    <img className='pb-3' src='media\logo.svg' style={{width:"60%"}}/>
                    <p>&copy; 2010 - 2024, Zerodha Broking Ltd.All rights reserved.</p>

                </div>
                <div className='col-3'>
                    <h5 className='mb-4 text-muted'>Company</h5>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>About</a><br/>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Products</a><br/>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Pricing</a><br/>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Referral programme</a><br/>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Careers</a><br/>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Zerodha.tech</a><br/>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Press & media</a>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Zerodha Cares (CSR)</a>
                </div>
                <div className='col-3'>
                    <h5 className='mb-4 text-muted'>Support</h5>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Contact us</a><br/>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Support portal</a><br/>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Z-Connect blog</a><br/>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>List of charges</a><br/>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Downloads & resources</a><br/>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Videos</a><br/>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Market overview</a>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>How to file a complaint?</a>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Status of your complaints</a>
                </div>
                <div className='col-3'>
                    <h5 className='mb-4 text-muted'>Account</h5>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Open an account</a><br/>
                    <a href='#' style={{textDecoration:"none",color:"grey"}}>Fund transfer</a><br/>
                    
                </div>
            </div>
            <div className='row pt-5'>
                <div className='text-muted' style={{fontSize:"12px"}}>
                <p>
                Zerodha Broking Ltd.: Member of NSE,BSE MCX -SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 -SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='#' style={{textDecoration:"none"}}>complaints@zerodha.com</a>, for DP related to <a href='#' style={{textDecoration:"none"}}>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                </p>
                <p>
                Procedure to file a complaint on <a href='#' style={{textDecoration:"none"}}>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                </p>
                <p>
                <a href='#' style={{textDecoration:"none"}}>Smart Online Dispute Resolution</a> | <a href='#' style={{textDecoration:"none"}}>Grievances Redressal Mechanism</a>
                </p>
                <p>
                Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                </p>
                <p>
                Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                </p>
                <p>
                "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='#' style={{textDecoration:"none"}}>create a ticket here</a>.
                </p>
                </div>
            </div>
            <div className='row pb-4 text-center'>
                <div className='col' style={{fontSize:"13px"}}>
                <a href='#' style={{textDecoration:"none",color:"grey"}}>NSE &nbsp; &nbsp; &nbsp;</a>
                <a href='#' style={{textDecoration:"none",color:"grey"}}>BSE &nbsp; &nbsp; &nbsp;</a>
                <a href='#' style={{textDecoration:"none",color:"grey"}}>MCX &nbsp; &nbsp; &nbsp;</a>
                <a href='#' style={{textDecoration:"none",color:"grey"}}>Terms & conditions &nbsp; &nbsp; &nbsp;</a>
                <a href='#' style={{textDecoration:"none",color:"grey"}}>Policies & procedures &nbsp; &nbsp; &nbsp; </a>
                <a href='#' style={{textDecoration:"none",color:"grey"}}>Privacy policy &nbsp; &nbsp; &nbsp;</a>
                <a href='#' style={{textDecoration:"none",color:"grey"}}>Disclosure &nbsp; &nbsp; &nbsp;</a>
                <a href='#' style={{textDecoration:"none",color:"grey"}}>For investor's attention &nbsp; &nbsp; &nbsp;</a>
                <a href='#' style={{textDecoration:"none",color:"grey"}}>Investor charter &nbsp; &nbsp; &nbsp;</a>
                </div>
        
            </div>
        </div>
        </footer>
    );
}

export default Footer;