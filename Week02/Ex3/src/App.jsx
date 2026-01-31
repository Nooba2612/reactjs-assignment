import { useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <>
      <div>
        <input onChange={(e) => setEmail(e.currentTarget.value)} type="text" placeholder='email'/>
      </div>
      <div>
        <input onChange={(e) => setName(e.currentTarget.value)} type="text" placeholder='name'/>
      </div>

      <div>
        <div>Email: {email}</div>
        <div>Name: {name}</div>
      </div>
    </>
  )
}

export default App
