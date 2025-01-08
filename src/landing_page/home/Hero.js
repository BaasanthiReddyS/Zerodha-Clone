import React from 'react';

function Hero() {
    return ( 
        // bootstrap css: it has a container which contains the whole section and it has a class called row and class column it has 12 cols in 1 row. // how many ever col you take, its divided by 12 and occupies that much. ex: there is one col so it takes up all 12 , there are 2 col divs so each takeds up 6. if coustum needed then we can do col-4 or col-8. this should sum up to 12 (not exceed).

        // here the image can be imported as it is like how we would do in html as it is not in the landing_page and its in public folder.
        //we would have imported it {} like this if it was in landing page folder.

        //bootstrap has p padding and m margin and also mb margin bottom or pt padding top etc..
        // style width 100% is so good that it fits the image properly. even when minimised and normally also.
        //btn-primary is create that blue bg white font css.
        //mb or mt or any 5 is max limit.

        <div className='container p-5'>
            <div className='row text-center pt-5'>
                <div className='col'>
                    <img src='media/homeHero.png' alt='Hero IMG' className='mb-4' style={{width:"65%", height:"auto",}}/>
                    <h1 className='mt-5'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='p-2 mt-4 mb-5 btn btn-primary fs-5' style={{margin:"0 auto",width:"20%",}}>Sign Up for Free</button>

                </div>
            </div>

        </div>
     );
}

export default Hero;