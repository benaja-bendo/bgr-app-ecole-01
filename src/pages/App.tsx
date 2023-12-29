import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Hello, world!</h1>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default App
