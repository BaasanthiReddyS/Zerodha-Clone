import React from 'react';

function RightSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
        // image size altered by width.
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-5 text-muted' style={{paddingRight:"84px",paddingTop:"140px"}} >
                        <h2>{productName}</h2>
                        <p style={{fontSize:"18px", paddingTop:"20px",}}>{productDescription}</p>
                        <a href={learnMore} style={{textDecoration:"none" , color:"gray"}}>Learn More &rarr;</a>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-6' style={{paddingLeft:"10px",paddingRight:"10px"}}>
                        <img src={imageURL} style={{width:"110%"}}/>
                    </div>
                    
                </div>
            </div>
     );
}

export default RightSection;