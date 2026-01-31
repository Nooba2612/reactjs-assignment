import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  console.log(count);
  const handleIncrease = () => {
    setCount(count => count+1)
  }
  
  const handleDecrease = () => {
    if (count<0) {
      setCount(0)
      return
    }
    setCount(count => count-1)
  }
  
  const handleReset = () => {
    setCount(0)
  }

  return (
    <>
      <div style={{color: count>10?"red":"black"}}>Count: {count}</div>
      <div>
        <button onClick={handleDecrease} style={{color: "red", fontSize: 20, border: "1px solid black", padding: "3px 5px", marginLeft: 5, borderRadius: 6}}>-</button>
        <button onClick={handleReset} style={{color: "red", fontSize: 20, border: "1px solid black", padding: "3px 5px", marginLeft: 5, borderRadius: 6}}>Reset</button>
        <button onClick={handleIncrease} style={{color: "red", fontSize: 20, border: "1px solid black", padding: "3px 5px", marginLeft: 5, borderRadius: 6}}>+</button>
      </div>
    </>
  )
}

export default App
