import { useState } from "react"

function App() {
  return <div>
    hi there
  <Counter></Counter>
  </div>
}


function Counter(){
  const [count, setCount] = useState(0);
    
  function increaseCount(){
    setCount(count + 1);
  }

  function decreaseCount(){
    setCount(count - 1);
  }

  function ResetCount(){
    setCount(0);
  }
  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount}>Decrease Count</button>
    <button onClick={ResetCount}>Reset Count</button>
  </div>
}

export default App



