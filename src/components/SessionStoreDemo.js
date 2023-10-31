import useSessionStorage from "../hooks/useSessionStorageHook";

function SSDemo() {
  const [count, setCount] = useSessionStorage("SScounter",0)

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default SSDemo;