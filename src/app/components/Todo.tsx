import { useState } from "react";

function TodoList() {
    const [input, setInput] = useState<string>("");   
    const [tasks, setTasks] = useState<string[]>([]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    }

    function handleAdd() {
        if (input.trim() === "") return;
        setTasks([...tasks, input]);
        setInput("");
    }

    function handleDelete(index: number) {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
    }

    return (
        <div>
            <input 
                type="text"
                value={input}
                onChange={handleChange}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDelete(index)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
