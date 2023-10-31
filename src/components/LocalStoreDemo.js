import useLocalStorage from "../hooks/useLocalStorageHook";

function LSDemo() {
  const [count, setCount] = useLocalStorage("LScounter",0)

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

export default LSDemo;