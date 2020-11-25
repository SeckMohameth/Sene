import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import styles from '../styles/Home.module.css'

import data from '../users';

//maping the user object to the card component
const users = data.map(item => 
        <div className={styles.card}>
            <div className="Card-details">
                <h3>{item.name}</h3>
                <h4>{item.service}</h4>
                <p>{item.location}</p>
                <p>{item.lang}</p>
            </div>
            <Button color="secondary">
                View Profile
            </Button>
        </div>
    );


function Freelancer(){
    return (
        <div>
            {users}
        </div>
    )
}

export default Freelancer;