import { useRef, useState } from "react";
import "./App.css";

function App() {
    const [todo, setTodo] = useState([]);
    const inputRef = useRef();
    const handleAddTodo = () => {
        const text = inputRef.current.value;
        const newItem = 
        setTodo([...todo, text]);
        inputRef.current.value = "";
    };
    return (
        <div className="App">
            <h2>To Do List</h2>
            <div className="to-do-container">
                <ul>
                    {todo.map((item) => {
                        return <li>{item}</li>;
                    })}
                </ul>
                <input ref={inputRef} placeholder="Enter item ... " />
                <button onClick={handleAddTodo}>Add</button>
            </div>
        </div>
    );
}

export default App;
