import React from 'react';

function Awards() {

    // we can make col-lg-6 col-sm-12 // this occupies half on laptop(large) and full on mobile(small).
    //try using css to get space btw elements.

    return ( 
        <div className='container p-4'>
            <div className='row'>
            <div className='col p-5'>
                <img src="media\largestBroker.svg" style={{width:"85%",height:"auto",}}/>
            </div>
            <div className='col p-5'>
                <h2>Largest stock broker in India</h2>
                <p className='mb-5'>2+ million Zeoradha clients contribute to over 15% of all retail order voulumes in India daily by trading and investing in:</p>
                <div className='row'>
                    <div className='col'>
                        <ul>
                            <li className='pb-2' >Future and options</li>
                            <li className='pb-2' >Future and options</li>
                            <li>Future and options</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul>
                            <li className='pb-2' >Future and options</li>
                            <li className='pb-2' >Future and options</li>
                            <li>Future and options</li>
                        </ul>
                    </div>
                    <img className="mt-4" src="media\pressLogos.png" style={{width:"94%"}} />
                </div>
                
            </div>
            </div>
        </div>
     );
}

export default Awards;