import React from 'react';

function Hero() {
    return ( 
        //<i class="fa fa-camera-retro fa-lg"></i> fa-lg ,<i class="fa fa-camera-retro fa-2x"></i> fa-2x ,<i class="fa fa-camera-retro fa-3x"></i> fa-3x,<i class="fa fa-camera-retro fa-4x"></i> fa-4x ,<i class="fa fa-camera-retro fa-5x"></i> fa-5x
        <div style={{backgroundColor:"#387ed1",color:"#fff"}}>
        <div className='container pb-5' style={{paddingLeft:"20px",}}>
            <div className='row pt-5'>
                <div className='col-10'><h5 className='pb-5'>Support Portal</h5></div>
                <div className='col-2 text-decoration-underline'><p>Track tickets</p></div>
            </div>
            <div className='row'>
                <div className='col-7 pb-5'>
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <br/>
                    <form action='#' style={{paddingBottom:"20px"}}>
                    <input type='text' placeholder='Eg: how do i activate F&O, why is my order getting rejected... ' style={{width:"89%",height:"50px",paddingLeft:"12px",paddingBottom:"2px"}}/>
                    <button style={{backgroundColor:"#fff",border:"none",width:"39px",height:"48.5px",color:"gray"}}><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                    <a href="" style={{fontSize:"18px",paddingRight:"20px",color:'white'}}>Track account opening</a>
                    <a href="" style={{fontSize:"18px",paddingRight:"20px",color:'white'}}>Track account opening</a>
                    <a href="" style={{fontSize:"18px",paddingRight:"20px",color:'white'}}>Track account opening</a><br/><br/>
                    <a href="" style={{fontSize:"18px",paddingRight:"20px",color:'white'}}>Track account opening</a>
                </div>
                <div className='col-5 pt-5'>
                    <h5>Featured</h5>
                    <ol>
                        <li><a href="" style={{color:"#fff",fontSize:"17px"}}>BSE StAR mutual fund platform downtime</a></li><br/>
                        <li><a href="" style={{color:"#fff",fontSize:"17px"}}>Surveillance measure on scrips - January 2025</a></li>
                    </ol>
                </div>
            </div>
        </div>
        </div>
     );
}

export default Hero;