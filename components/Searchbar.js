import React from 'react';
import "tailwindcss/tailwind.css"


const Search = ({keyword, setKeyword}) => {
    return (
       <input className='search border-2 border-red-500 focus:border-red-700 rounded-lg p-2 w-80 ml-20'
       type='search'
       value={keyword}
       placeholder="Search Jambar"
    //    onChange={(e) => setKeyword(e.target.value)}
       />
    );
}

export default Search