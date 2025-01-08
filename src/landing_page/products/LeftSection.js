import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( // image size altered by width.
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6' style={{paddingLeft:"10px",paddingRight:"10px"}}>
                    <img src={imageURL} />
                </div>
                <div className='col-1'></div>
                <div className='col-5 pt-5 text-muted' style={{paddingLeft:"84px"}} >
                    <h2>{productName}</h2>
                    <p style={{fontSize:"18px", paddingTop:"20px",}}>{productDescription}</p>
                    <a href={tryDemo} style={{textDecoration:"none", paddingRight:"32px",color:"gray"}}>Try Demo &rarr;</a>
                    <a href={learnMore} style={{textDecoration:"none" ,color:"gray"}}>Learn More &rarr;</a><br /><br />
                    <a href={googlePlay} ><img src='media\googlePlayBadge.svg' style={{width:"180px", paddingRight:"32px",}} /></a>
                    <a href={appStore}><img src='media\appstoreBadge.svg' style={{width:"140px",}} /></a>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;