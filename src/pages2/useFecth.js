import { useState,useEffect } from "react";
const useFecth = (url) => {

    
    const [data,setData]=useState(null);
    const[isPending,setIsPending]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        const abortCont=new AbortController();
        setTimeout(()=>{
           //// npx json-server --watch data/db.json --port 8000
           //http://localhost:8000/blogs
           fetch(url,{signal:abortCont.signal})
           .then(res =>{
               if(!res.ok){
                   throw Error('Could not fetch the data for that resources');
               }
              return  res.json();
           })
           .then((data)=>{ 
               setData(data);
               setIsPending(false);
               setError(null);
           })
           .catch((err)=>{
            if(err.name==='AbortError'){
                console.log("Featch Abort")
            }else{
               setError(err.message);
               setIsPending(false);
            }
           })
        },1000);

            return()=>abortCont.abort();
       },[url])

       return {data,isPending,error};
}
 
export default useFecth;