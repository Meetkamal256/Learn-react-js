import { useState } from 'react'
import './index.css'
import Review from './Review'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Review />
    </>
  )
}

export default App
