import { useState } from "react";

export default function App(){

    const [todos, setTodos] = useState([{
        title: "Go to gym",
        description: "Hit the gym regularly",
        done: false
    }]);

    function addTodo() {
        let newArray = [];
        for(let i = 0; i < todos.length; i++){
            newArray.push(todos[i]);
        }
        newArray.push({
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            done: true,
        });
        setTodos(newArray);
    }

    return {
        <div>
            <input id="title" type="text" placeholder="Title"></input>
            <input id="description" type="text" placeholder="Description"></input>
            <br />
            <button onClick= {addTodo}>Add todo</button>
            <br />
            {todos.map((todo) => (
                <Todo 
                    title = {todo.title}
                    description = {todo.description}
                    done = {todo.done}
                />
            ))}
        </div>
    }
}


//useRef, react-hook-forms,
//state variables