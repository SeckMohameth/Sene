import React from 'react'
import 'tailwindcss/tailwind.css'
import Search from '../components/Searchbar'


function Nav() {
    
    

    return (
        <div className="nav bg-white flex space-x-64 ">
            <h1>Jambar logo here</h1>
            <div>
                <Search placeholder='Search Jamber' />
            </div>
            <button className="">Login</button>
            <button className="">Sign up</button>
        </div>
    )
}

export default Nav;