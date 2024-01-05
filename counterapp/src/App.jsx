import { useState } from 'react'
import './App.css'
import CounterComponent from './Component/Component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterComponent/>
    </>
  )
}

export default App
