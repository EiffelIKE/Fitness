import React from 'react'
import FatalImg from '../images/404.png'
import '../components/styles/Errors.css'

const NotFound = () => {
    return (
        <div>
            <h1 className='Text'>
                Ups! Nothing Here!              
            </h1>
            <img className='Image'  src={FatalImg} alt='Not found'/>
        </div>
    );
};

export default NotFound