import React from 'react';

import {Link} from 'react-router-dom'

const GoHome = () => {
  
    return (
        <div>
             <Link to={'/excersice'}>
             < button
                   
                    className="col-2 btn btn-primary">
                        Back
                </button>
                </Link> 
        </div>
    );
};

export default GoHome;
