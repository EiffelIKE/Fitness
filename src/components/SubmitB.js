
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitB = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button className="col-2 btn btn-primary"
       onClick= {()=>navigate('/excersice') }>Navigate</button>
    </div>
  );
};

export default SubmitB;