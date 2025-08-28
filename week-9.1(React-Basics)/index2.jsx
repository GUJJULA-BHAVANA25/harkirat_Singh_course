import { useState } from "react";

export default function App(){
    const [count, setCount] = useState(0);

    const count1 = 0;
    count1 = count1 + 1;

    function onClickHandler(){
        count = count + 1;
        setCount(count + 1);
    }

    return{
        <div>
            <button onClick={props.onClickHandler}>Counter {count}</button>
        </div>
    };
}

function Button(props) {
    return <button onClick={props.onClick}>Counter {count}</button>;
}