import React from 'react';
import Card from '../components/Card'
import "tailwindcss/tailwind.css";

const CardList = (props) => {
    return (
        <div>
            {props.users.map(user => 
                <Card key={props.users} user={users}/>
                )}
        </div>
    );
}

export default CardList