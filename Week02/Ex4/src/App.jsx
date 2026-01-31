import { useState } from 'react'
import StatusBadge from './StatusBadge'

function App() {
  const [status, setStatus] = useState("online")
  return (
    <>
      <StatusBadge status={status} />
      <div>
          <button onClick={() => setStatus("online")}>Online</button>
          <button onClick={() => setStatus("offline")}>Offline</button>
          <button onClick={() => setStatus("busy")}>Busy</button>
      </div>
    </>
  )
}

export default App
