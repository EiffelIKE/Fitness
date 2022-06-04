import React from 'react'
import ExcersicesForm from '../components/ExcersicesForm';
import Card from '../components/Card';


const ExcercisesNew = ({onChange,onSubmit,form}) => {
    return (
           
        <div className="Lateral row">
            <div className="col-sm Space">
                <Card
                {...form}/>
            </div>
            <div className="col-sm Space2">
               <ExcersicesForm                 
                 onChange={onChange} 
                 onSubmit={onSubmit}
                 form={form}/>
            </div>
            
        </div>
    );
};

export default ExcercisesNew;