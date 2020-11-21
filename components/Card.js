import React from 'react';
import "tailwindcss/tailwind.css"

//this is for linking each card to a user profile
import Link from 'next/link';

const Card = (props) => {
    return (
        <a className="hover: border-red-600">
            <div className="user-card">
                <h2>{props.name}</h2>
                <h3>{props.service}</h3>
                <p>{props.location}</p>
                <p>{props.lang}</p>
            </div>
        </a>
    );
}

export default Card;