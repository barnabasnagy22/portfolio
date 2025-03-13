import { useState, useEffect } from "react";
import "./todo.css";

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const toggleTask = (index) => {
        setTasks(tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div id="todo" className="container mt-5">
            <h2 className="text-center text-white">To-Do App</h2>
            <div className="transparent-card shadow-lg p-4">
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input 
                            type="text"
                            className="form-control transparent-input"
                            placeholder="Add new task..."
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                        <button className="btn btn-primary" onClick={addTask}>Add</button>
                    </div>

                    <ul className="list-group">
                        {tasks.map((task, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <span 
                                    className={task.completed ? "text-decoration-line-through text-muted" : ""}
                                    onClick={() => toggleTask(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {task.text}
                                </span>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Todo;
