import { useState } from "react";

export default function App(){

    /*
    const stateVariable = useState(0);
    const count = stateVariable[0];
    const setCount = stateVariable[1];
    */

    const [count, setCount] = useState(0);  //hook              //the above three lines of code does the same thing as the present line

    function onClickHandler(){
        setCount(count + 1);
    }

    
    return {
        <div>
            <button id="btn" onClick={onClickHandler}>Counter {count}</button>
        </div>
    };
}


//understand concepts like: 
// context api 
//  prop drilling  
// VDOM 
// Diffing 
// Bulk Updates 
// Reconciliation
