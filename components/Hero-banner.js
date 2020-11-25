import React from 'react';
import "tailwindcss/tailwind.css"

//https://images.unsplash.com/photo-1569098391264-18980acb40b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80


function HeroBanner() {
    return (
        <header className="header">
            <div className="hero-banner">
                {/* <img src="https://images.unsplash.com/photo-1511283878565-0833bf39de9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"/> */}
                <h1>Find your creator</h1>
                <h3>Senegal's largest community of freelancers and businesses</h3>
                <div className="banner__buttons">
                    <button className=" bg-red-600 text-base font-medium rounded-lg p-3 px-6">Hire</button>
                    <button className="">Offer Services</button>
                </div> 
            </div>
        </header>
    )
}

export default HeroBanner;