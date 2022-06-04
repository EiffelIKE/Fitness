import React,{useState} from 'react';
import Loading from '../components/Loading';
import '../components/styles/ExerciseNew.css'
import ServerError from './ServerError';
import ExcercisesNew from './ExcercisesNew';
import { useNavigate } from 'react-router-dom';
import url from '../Config';
const ExcercisesNewContainer=()=>{
     const [form,SetForm]=useState({title:'',
                                    description:'',
                                    img:'',
                                    leftColor:'',
                                    rightColor:''
                                   })
    const [loading,SetLoading] = useState(false)    
    const [error,SetError]  = useState(null)
    const navigate = useNavigate()

let handleChange = e => {
    SetForm({   
         ...form,
        [e.target.name]:e.target.value
    })
}
let handleSubmit = async e =>{
   
    e.preventDefault()
   
    SetLoading(true)
    try {
       
        let config = {
            method:'POST',
            headers:{
                'Acept':'application/json',
                'Content-Type':'application/json'},

             body: JSON.stringify(form)}
        let res = await fetch(`${url}/excersices`,config)
        let json = await res.json()
        console.log(json)
        
        SetLoading(false)
            navigate('../excersice')      
    } catch (error) {
        SetError(error)
    }
    
 }
 if(loading)
 return <Loading />

if(error)
 return <ServerError />                   
         
 return (
     <>
     <ExcercisesNew
     onChange={handleChange} 
          onSubmit={handleSubmit}
          form={form}/>
     </>
 )
    
}

export default ExcercisesNewContainer