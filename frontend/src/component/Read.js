import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';



const Read = () => {
    const [user,setUser]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        axios.get("http://localhost:8080/"+id)
        .then(res=>setUser(res.data))
        
        .catch(err => console.log(err))
        

    },[]);
    
  return (
    <div className='d-flex  felx-column justify-content-center align-item-cente bh-light vh-100'>Read
        <hi> Users</hi>
        <div className='mb-2'>
            <strong>Frist Name:{user.data}</strong>
        </div>
        <div className='mb-2'>
            <strong>Last Name:{user.data}</strong>
        </div>
        <div className='mb-2'>
            <strong>Mobile Number:{user.data}</strong>
        </div>
        <div className='mb-2'>
            <strong>Email :{user.data}</strong>
        </div>
        <div className='mb-2'>
            <strong>Passsord :{user.data}</strong>
        </div>
        <div className='mb-2'>
            <strong>Age:{user.data}</strong>
        </div>
        <div className='mb-2'>
            <strong>Gender:{user.data}</strong>
        </div>
        <div className='mb-2'>
            <strong>Adddress:{user.data}</strong>
        </div>
         <Link to={'/${id}'} className='btn btn-success'>Edit</Link>
         <Link to="/" className='btn btn-success'>Back</Link>               

        
    </div>
    
  )
}

export default Read