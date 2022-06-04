import React from 'react'
import FatalErrorImg from '../images/500.png'
import '../components/styles/Errors.css'

const ServerError = () => {
    return (
        <div>
            <h1 className='Text'>
                Sorry, Unespected Error           
            </h1>
            <img className='Image'  src={FatalErrorImg} alt='Not found'/>
        </div>
    );
};

export default ServerError