import React from 'react';
import Card from '../components/Card';
import { Link} from 'react-router-dom';

const ExcersiceWiev = () => {
 
  
    return (
        <div>
            View Your Excersice!
           <div> <Link to='/excersice'>
             <button 
               
               className=" col-2 btn btn-primary">
                Back
           </button> </Link>
           </div>
           <Card 
               />
        </div>
    );
};

export default ExcersiceWiev;