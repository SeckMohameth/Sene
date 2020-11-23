import React from 'react';
import "tailwindcss/tailwind.css"

//this is for linking each card to a user profile
import Link from 'next/link';

const Card = (props) => {
    return (
        <a className="hover: cursor-pointer ">
            <div className="user-card hover:bg-red-600 border-red-700 hover:shadow-xl hover:text-white flex flex-col items-center">
                <img src={props.img} className="pb-5"/>
                <h2 className="text-lg font-bold pb-5">{props.name}</h2>
                <h3 className="service font-medium pb-5">{props.service}</h3>
                <p className="pb-5">{props.location}</p>
                <p>{props.lang}</p>
            </div>
        </a>
    );
}

export default Card;