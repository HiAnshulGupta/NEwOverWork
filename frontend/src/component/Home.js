import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [user,setUser]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080",user)
        .then(res=>setUser(res.data))
        
        .catch(err => console.log(err))
        

    },[]);
    
  return (
    <div className='d-flex  felx-column justify-content-center align-item-cente bh-light vh-100'>Read
        <hi>List Users</hi>
        <div className='w=75 rounded bh-white border shadow p-4'>
            <div className='d-flex justify-content-end'>
                <Link to="/Register" className='btn btn-success'>Add+</Link>
            </div>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>MobileNUmber</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Adddress</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        user.map((d,i) =>(
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.firstName}</td>
                                <td>{d.lastName}</td>
                                <td>{d.mobilenumber}</td>
                                <td>{d.email}</td>
                                <td>{d.age}</td>
                                <td>{d.gender}</td>
                                <td>{d.address}</td>
                                <td>
                                    <Link to='/${d.id}' >Read</Link>
                                    <Link to='/${d.id}' >Edit</Link>
                                    <Link to='/delete/${id}' >Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    </div>
    
  )
}

export default Home