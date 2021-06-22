import React, { useState } from "react";
import { useErrorHandler } from "react-error-boundary";
const MAX_COUNT_ALLOW = 5;

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const handlerError = useErrorHandler();
  const handleClick = () => {
    try {
      if (count === MAX_COUNT_ALLOW) {
        throw new Error("angka telah melewati batas");
      } else {
        setCount((a) => a + 1);
      }
    } catch (e) {
      handlerError(e);
    }
  };
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={handleClick}>Klik me ya</button>
    </div>
  );
};

export default ClickCounter;
