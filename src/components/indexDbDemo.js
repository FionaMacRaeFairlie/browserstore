import useIndexedDB from "../hooks/useIndexDbHook";

function IdbDemo() {
  const [count, setCount] = useIndexedDB("myDatabase", "myObjectStore", "count");

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

export default IdbDemo;