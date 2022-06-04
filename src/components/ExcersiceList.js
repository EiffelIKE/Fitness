import React from 'react';
import Card from './Card';



const ExcersiceList = ({excersices}) => {

  
  
    
    return (
        <div>
             {excersices.map((excersice)=>{
        return(
         <Card
         key={excersice.id}
         title= {excersice.title}
         description={excersice.description}
         img={excersice.img}
         leftColor={excersice.leftColor}
         rightColor={excersice.rightColor}
        
     />
        )
    })} 
        </div>
    );
};


export default ExcersiceList