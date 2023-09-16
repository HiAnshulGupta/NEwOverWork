import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const[values,setValues]=useState({
        firstname:'',
        lastname:'',
        mobilenumber:'',
        email:'',
        password:'',
        age:'',
        gender:'',
        address:''
    });
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/Register",values)
        .then(res=>{
            console.log(res);
        navigate('/')})
        .catch(err => console.log(err))
    }
  return (
    <div className='d=flex w-100 vh-100 justify-content-center align-center bg-light'>
        <h1>Register User</h1>
        <form>
            <div className='mb-2'>
                <label htmlFor='firstname'>FirstName</label>
                <input type='text' name='firstname' className='from-control' 
                onChange={e=>setValues({...values,firstname:e.target.value})}/>

            </div>
            <div className='mb-2'>
                <label htmlFor='lastname'>LastName</label>
                <input type='text' name='lastname' className='from-control'
                onChange={e=>setValues({...values,lastname:e.target.value})} />

            </div>
            <div className='mb-2'>
                <label htmlFor='mobilenumber'>Mobile Number</label>
                <input type='number' name='mobilenumber' className='from-control'
                onChange={e=>setValues({...values,mobilenumber:e.target.value})} />

            </div>
            <div className='mb-2'>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' className='from-control'
                onChange={e=>setValues({...values,email:e.target.value})} />

            </div>
            <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <input type='text' name='password' className='from-control'
                onChange={e=>setValues({...values,password:e.target.value})} />

            </div>
            <div className='mb-2'>
                <label htmlFor='age'>Age</label>
                <input type='number' name='age' className='from-control' 
                onChange={e=>setValues({...values,age:e.target.value})}/>

            </div>
            <div className='mb-2'>
                <label htmlFor='gender'>Gender</label>
                <input type='text' name='gender' className='from-control' 
                onChange={e=>setValues({...values,gender:e.target.value})}/>

            </div>
            <div className='mb-2'>
                <label htmlFor='address'>Address</label>
                <input type='text' name='adress' className='from-control'
                onChange={e=>setValues({...values,address:e.target.value})} />

            </div>
            <div>
                <button className='btn btn-success'>Submit</button>
                <Link to='/' className='btn btn-primary ms-3'>Back</Link>
            </div>
        </form>




    </div>

  )
}

export default Register