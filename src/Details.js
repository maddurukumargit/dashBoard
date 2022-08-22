import React,{useState,useEffect} from 'react'
import './App.css';


function Details() {
  // const [name,setName]=useState()
  // const [empid,setEmpid]=useState()
  // const onsubmit=(e)=>{
  //   console.log(e)
  //   console.log(name)
  //   console.log(empid)
  // }
  
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
  .then(json => console.log(json))
},[])
  
   return (
    <div className="App">
  {/* //     <form className="form">
  //       <label>User Name: </label>
  //       <input type="text" placeholder='username'value={name} onChange={(e)=>setName(e.target.value)}/>
        
  //       <label>Employee ID: </label>
  //       <input type="text" placeholder='enteremployeedetails'value={empid} onChange={(e)=>setEmpid(e.target.value)}/>
       
  //     </form>
  //     <button onClick={onsubmit}>Login</button> */}




    </div>
  );
}

export default Details;
