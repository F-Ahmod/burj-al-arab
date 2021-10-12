import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Book = () => {
    const {bedType} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's book a  Room {bedType}.</h1>
            <h3>Want a <Link to="/home">different room?</Link> </h3>
            <h3>Login First <Link to="/login">Confurm Your login?</Link> </h3>
        </div>
    );
};

export default Book;