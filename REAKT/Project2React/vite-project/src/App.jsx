
import { useState } from 'react';
import './App.css'
import {Form} from "./Components/Form";
import {Usercard} from "./Components/UserCard";

function App() {
  const  [password,setPassword]=useState('')
  const [username, setUsername]=useState('')
  const [role, setRole] = useState("")
  return (
   <>
  <div className='card'>
    <img width={100} src="{picture}" alt="" />
  </div>
    <h4>@{username}</h4>
    <p>#{role}</p>
  <form className="card"></form>
  <div>
    <label htmlFor="username">Username</label>
    <input id="username" onChange={(e)=>{
      setUsername(e.currentTarget.value)

    }}
    value={username} />
  </div>
  <div>
    <label htmlFor="password">Password</label>
    <input id="password" onChange={(e)=>{
      setPassword(e.currentTarget.value)

    }}
    value={password} />
  </div>
  <div>
    <label htmlFor="role">Role</label>
    <select
     id="role"
     type="role"
     value ="role">
    onChange={(e)=>{
      setRole(e.currentTarget.value)
      switch (e.currentTarget.value) {
     
      }
      

    }} </select>
    value={Role} />
  </div>
   </>
)

}