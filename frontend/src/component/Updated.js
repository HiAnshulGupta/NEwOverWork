import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'

const Updated = () => {
    // const [user,setUser]=useState([]);
    const {id} = useParams();

    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        mobilenumber: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        address: ''
    });

    useEffect(() => {
        axios.get("http://localhost:8080/${id}" )
            .then(res => {
                setValues(res.data);

            })
            .catch(err => console.log(err))

    });
    const navigate = useNavigate();
    const handleUpdtae = (e) => { 
    e.priventDefault();
    axios.put("http://localhost:8080/"+id, values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='d=flex w-100 vh-100 justify-content-center align-center bg-light'>
            <h1>Edit User</h1>
            <form onSubmit={handleUpdtae}>
                <div className='mb-2'>
                    <label htmlFor='firstname'>FirstName</label>
                    <input type='text' name='firstname' className='from-control'
                        value={values.firstname} onChange={e => setValues({ ...values, firstname: e.target.value })} />

                </div>
                <div className='mb-2'>
                    <label htmlFor='lastname'>LastName</label>
                    <input type='text' name='lastname' className='from-control'
                        value={values.lastname} onChange={e => setValues({ ...values, lastname: e.target.value })} />

                </div>
                <div className='mb-2'>
                    <label htmlFor='mobilenumber'>Mobile Number</label>
                    <input type='number' name='mobilenumber' className='from-control'
                        value={values.mobilenumber} onChange={e => setValues({ ...values, mobilenumber: e.target.value })} />

                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' className='from-control'
                        value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} />

                </div>
                <div className='mb-2'>
                    <label htmlFor='password'>Password</label>
                    <input type='text' name='password' className='from-control'
                        value={values.password} onChange={e => setValues({ ...values, password: e.target.value })} />

                </div>
                <div className='mb-2'>
                    <label htmlFor='age'>Age</label>
                    <input type='number' name='age' className='from-control'
                        value={values.age} onChange={e => setValues({ ...values, age: e.target.value })} />

                </div>
                <div className='mb-2'>
                    <label htmlFor='gender'>Gender</label>
                    <input type='text' name='gender' className='from-control'
                        value={values.gender} onChange={e => setValues({ ...values, gender: e.target.value })} />

                </div>
                <div className='mb-2'>
                    <label htmlFor='address'>Address</label>
                    <input type='text' name='adress' className='from-control'
                        value={values.address} onChange={e => setValues({ ...values, address: e.target.value })} />

                </div>
                <div>
                    <button className='btn btn-success'>Edit</button>
                    <Link to='/' className='btn btn-primary ms-3'>Back</Link>
                </div>
            </form>




        </div>
    )
}

export default Updated