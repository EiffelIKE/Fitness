import React from 'react';
import ExcersiceList from '../components/ExcersiceList'; 
import Wellcome from '../components/Wellcome';
import AddExcersice from '../components/addExcersice';

const Exercises = ({excersices}) => {
    return (
        <>
            
                  <Wellcome 
                   username= "JC" />
                  <ExcersiceList
                  excersices= {excersices} />
                  <AddExcersice/>
             
        </>
    );
};

export default Exercises;