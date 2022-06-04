import React from 'react';
import  './styles/WellcomeCSS.css'

const Wellcome = ({username}) => {
    return (
        <div className="container">
        <div className="WellcomeCSS">
           <h1>Hello {username} :</h1>
           <p>Let's work out to get some gains!</p>
        </div>
    </div>
    );
};

export default Wellcome