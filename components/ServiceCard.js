import React from 'react'
import 'tailwindcss/tailwind.css'

export default function Service(props) {
    return (
        <a className="cursor-pointer">
        <div className="service-card container shadow-xl mb-16">
            <img className="object-fill h-48 w-full" src={props.img} height="200" width="200"/>
            <div className="service-title">
                <h2>{props.title}</h2>
            </div>
        </div>
        </a>
    )
}