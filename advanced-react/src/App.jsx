import { useState } from "react";
import Starter from './tutorial/01-useState/starter/02-useState-basics'
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Starter />
    </div>
  );
}


export default App;
