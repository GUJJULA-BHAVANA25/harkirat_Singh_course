import { useState } from "react"

function App() {
  return <div>
    hi there
  <Counter></Counter>
  </div>
}


function Counter(){
  const [count, setCount] = useState(0);
    
  setInterval(function(){
    setCount(count + 1);
  }, 1000)

  return <div>
    <h1 id="text">{count}</h1>
  </div>
}

export default App
