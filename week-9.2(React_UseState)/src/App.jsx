import { useEffect, useState } from "react";

//conditional rendering
function App(){
    let [counterVisible, setCounterVisible] = useState(true);

    useEffect(function () {
        setInterval(function(){
            setCounterVisible(c => !c)
        }, 5000);
    })
    
    return <div>
      hi
      {counterVisible ? <Counter></Counter> : null}        
      hello
    </div>
}

//mounting, re-rendering,unmounting
function Counter(){
    const [count, setCount] = useState(0);

    //hooking into the lifecycle events of react
    console.log("counter");

    //this hook guard our setInterval from re-render. this hook doesn't allow this function to reset again and again
    useEffect(function() {
      console.log("on mount");
        let clock = setInterval(function(){
            // setCount(count => count + 1);    //this line does the same thing as below three lines
            console.log("from inside the interval");
            setCount(function(c){
              return c + 1;
            })
        }, 5000); 

        //cleanup
        return function(){
        console.log("on unmount");
          clearInterval(clock);
        }
    }, []);          //dependency array, cleanup, fetch inside useEffect

    function increaseCount(){
        setCount(count + 1);
    }

    return <div>
        <h1 id="text">{count}</h1>
        <button onClick={ increaseCount }>increaseCount</button>
    </div>
}

export default App