import { useState } from "react";

function useDataCounter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return { count, increase, decrease };
}

export default useDataCounter;
