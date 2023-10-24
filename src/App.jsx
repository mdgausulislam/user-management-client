import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user,setUser]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[])

  return (
    <>
      <h1>User Management System</h1>
      <h3>Numbers of users: {user.length}</h3>

      <form>
        <input type="text" name="name" id="" />
        <br/>
        <input type="email" name="email" id="" />
        <br/>
        <input type="submit" value="Submit" />
      </form>

      <div>
        {
          user.map(u=><p key={u.id}>{u.id}: {u.name}: {u.email}</p>)
        }
      </div>
    </>
  )
}

export default App
