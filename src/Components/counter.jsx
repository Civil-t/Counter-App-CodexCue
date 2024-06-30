import React from "react";
import "./counter.css";

const counter = () => {
  const [count, setCount] = React.useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <div className="container">
        <div className="display">{count}</div>
        <div className="incr-decre-btns">
          <button onClick={increase}>Increment</button>
          <button onClick={decrease}>Decrement</button>
        </div>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default counter;
