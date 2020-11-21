import React from 'react';
import "tailwindcss/tailwind.css"


const Search = ({keyword, setKeyword}) => {
    return (
       <input className='search'
       type='search'
       value={keyword}
       placeholder="Search Jambar"
    //    onChange={(e) => setKeyword(e.target.value)}
       />
    );
}

export default Search