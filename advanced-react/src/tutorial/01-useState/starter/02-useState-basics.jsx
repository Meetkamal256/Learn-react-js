import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  // const clickHandler = () => {
  //   setCount(count + 1);
  // };
  function clickHandler() {
    setCount(count + 1);
  }
  return (
    <div>
      <h4>You click {count} times</h4>
      <button type="button" className="btn" onClick={clickHandler}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
