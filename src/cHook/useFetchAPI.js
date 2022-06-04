import {useState,useEffect} from 'react'

const useFectchAPI = url=>{
   const [data,setData]  =useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]    =useState(null)
      
     useEffect(()=>{
       const fetchAPI = async()=> {
            try{
                 let res = await fetch(url)
                 let data = await res.json()
                 setData(data)
                 setLoading(false)
                
                        
             } 
            catch(error){
                setLoading(false)
                setError(true)
          
            }
                     
        }
        fetchAPI()  
     },[url])
    return({data,loading,error})
}

     export default useFectchAPI