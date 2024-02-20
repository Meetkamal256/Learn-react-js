import { useState} from 'react'
import { useGlobalContext } from "./context"; 
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  const {name} = useGlobalContext();
  console.log(name);

  return "hello world";
    
}

export default App
