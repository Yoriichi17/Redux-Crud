import React, { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { create } from '../store/Reducer';
import { useNavigate } from 'react-router-dom';

function Create() {
    let users = useSelector((state) => state.users)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    let dispatch = useDispatch();
    let navigate = useNavigate();
    let submitHandler= (e) =>{
        e.preventDefault();
        dispatch(create({  id: users.length>0 ? users[users.length-1].id+1 : 1, name , email }))
        navigate("/")
    }
  return (
    <div className='c-App'>
        <h1>Create new entry : </h1>
        <form id='form' onSubmit={submitHandler}>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" onChange={(e)=> setName(e.target.value)}/>
            <br/>
            <br/>
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" onChange={(e)=> setEmail(e.target.value)}/>
            <br/>
            <br/>
            <button id='btn' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Create