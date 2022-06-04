import React from 'react';
import './styles/Card.css';
import addImg from '../images/add.png'
import {Link} from 'react-router-dom'

const addExcersice = () => {
    return (
        <div>
             <Link to='/excersice/new'>
             <img src={addImg} className='Add'  alt ='New'/>
             </Link>
        </div>
    );
};

export default addExcersice;
