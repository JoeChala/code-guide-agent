import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
}