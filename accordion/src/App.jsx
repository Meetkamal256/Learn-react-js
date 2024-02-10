import { useState } from "react";
import "./index.css";
import Question from "./Question";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Question />
    </>
  );
}

export default App;
