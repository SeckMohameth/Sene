import React from 'react';
import Image from 'next/image'
import "tailwindcss/tailwind.css"



function HeroBanner() {
    return (
        <div className="hero-banner">
            <Image className="hero-banner" src="/images/senegalFlag.jpg" width="100%" height="200"/>
        </div>
    )
}

export default HeroBanner;