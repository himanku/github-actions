import { useState } from "react";
import "./App.css";
function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count+1);
  };
  const handleDecrement = () => {
    setCount(count-1);
  };
  return (
    <div className="App">
      <h1>Count - {count}</h1>
      <div>
        <button onClick={handleDecrement}> DECREMENT </button>
        <button onClick={handleIncrement}> INCREMENT </button>
      </div>
    </div>
  );
}

export default App;
