import React from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../store/Reducer';

function Home() {
    let users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    
  return (
    <div className='App'>
        <h1 style={{textDecoration : 'underline'}}>Information List</h1>
        <div className='create-banner'>
            <Link  to={'/create'}><button id='btn'>Create</button></Link>
        </div>
        
        <div className='table'>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            <tbody>
                {users.map((user)=> 
                <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td style={{display : 'flex', gap : '5px', padding : '2px'}}>
                   <Link style={{textDecoration : 'none',color : 'black'}} to={`/update/${user.id}`}> <button id='btn'>Edit</button></Link>
                    <button id='btn' onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                </td>
                </tr>
                )}
                
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Home