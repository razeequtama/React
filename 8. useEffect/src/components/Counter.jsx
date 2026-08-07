import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function changeCount() {
    setCount((count) => count + 1);
  }

  function resetCount() {
    setCount(0);
  }

  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);

  return (
    <>
      <button onClick={changeCount}>
        Counter is {count}
      </button>

      <button onClick={resetCount}>
        Reset
      </button>
    </>
  );
}

export default Counter;