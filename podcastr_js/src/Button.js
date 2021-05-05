import { useState } from "react";

function Button(props) {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <>
      <span>{counter}</span>
      <button onClick={increment}>{props.children}</button>
    </>
  );
}

export default Button;
