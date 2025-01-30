import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=> {
    // if you don't understand below code, try to research how JS promises works
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    fetch('http://localhost:3000/api/users', { method: 'get' })
    .then(res => res.json())
    .then((data) => setUsers(data.clients))
  }, [])
  return (
    <>
      <h1>Welcome to Ojo de agua management</h1>
      <ul>
        {users.map(user => <li key={user.name}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default App
