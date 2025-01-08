import React from 'react';

function Signup() {
    return ( 
        // ml,mr or mx  my for up and bottom
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-8 p-2'>
                    <img src='media\landing.46a77378.png' style={{width:"85%"}} />
                </div>
                <div className='col-4 p-4 text-muted'>
                    <h3>Signup now</h3>
                    <p style={{fontSize:"17px",paddingBottom:"12px",paddingTop:"10px"}}>Or track your eisting application.</p>
                    <input style={{width:"110%",height:"40px"}}/>
                    <p style={{fontSize:"13px", paddingTop:"22px"}}>You will receive an OTP on your number</p>
                    <button className='btn btn-primary' style={{paddingLeft:"22px",paddingRight:"22px",paddingTop:"7px",paddingBottom:"7px"}}>Continue</button><br/>
                    <a href="#" style={{fontSize:"13px",textDecoration:"none"}}>Want to open an NRI account?</a>
                </div>
            </div>
            <div className='row text-center pb-4' style={{fontSize:"13px",color:"gray"}}>
                <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit <a href="#" style={{textDecoration:"none"}}>this article to know more.</a></p>
                <p>By submitting your contact details, you authorize Zerodha to contact you even if you are registered on DND & conduct online KYC for trading & demat account opening as per KRA regulations and PMLA guidelines.</p>
                <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a href="#" style={{textDecoration:"none"}}>offline forms.</a> For help, <a href="#" style={{textDecoration:"none"}}>click here.</a></p>
            </div>
        </div>
     );
}

export default Signup;