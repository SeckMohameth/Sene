import React from 'react';
import "tailwindcss/tailwind.css"

//this is for linking each card to a user profile
import Link from 'next/link';

const Card = (props) => {
    return (
        <a className="hover: cursor-pointer">
            <div className="user-card hover:bg-red-600 border-red-700 hover:shadow-xl hover:text-white flex flex-col items-center border-t-2">
                <div className="image-cropper mb-4 group-hover:border-red-700">
                    <img src={props.img} className="profile mb-5"/>
                </div>
                <h2 className="text-lg font-bold mb-5">{props.name}</h2>
                <h3 className="service font-medium mb-5">{props.service}</h3>
                <p className="pb-5">{props.location}</p>
                <p>{props.lang}</p>
            </div>
        </a>
    );
}

export default Card;