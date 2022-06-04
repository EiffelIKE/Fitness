import React from 'react';
import EmptyImg from '../images/empty.png'
import  './styles/Card.css'
import circlesImg from '../images/circles.png'
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description,img, leftColor, rightColor})=>{
  const navigate=useNavigate()
let handleClick=()=>navigate('./view')
  return(
  <>
    <div  className='card '
        style={{backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor||"#A74CF2"}, ${rightColor||'#617BFB'})`}} 

     > 
      <div className="card-body" onClick={handleClick}>
        <div className="row center">
          <div className="col-6">
              <img  src={img||EmptyImg} alt ='' className="float-right"  />
          </div>                           
          <div className="col-6 titulo">
                   <h1>{title}</h1>
                  <p>{description}</p>
          </div>
        </div> 
      </div> 
    </div >
  </>
)
}
export default Card