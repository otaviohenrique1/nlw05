import { ReactNode, useState } from "react";

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  const [counter, setCounter] = useState<number>(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <>
      <span>{counter}</span>
      <button onClick={increment}>{children}</button>
    </>
  );
}

export default Button;
