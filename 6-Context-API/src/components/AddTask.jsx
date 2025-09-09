import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function addTask({ setTodo }) {

    const [task, setTask] = useState("");

    function handleAddTask() {
        console.log("handletask is Triggered")
        if (!task.trim()) return; //No input condition
        setTodo((prev) => [...prev, { id: uuidv4(), todo: task, status: false }]);
        setTask("");
    }

    return (
        <div className="row g-3 w-100 d-flex justify-content-center">
            <div className="col-auto">
                <input type="text" className="form-control " id="task" placeholder="Enter your task" onChange={(event) => { setTask(event.target.value) }} style={{ fontSize: "1.2rem" }} value={task} />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3 " onClick={handleAddTask} style={{ fontSize: "1.2rem" }}>
                    Add Task &nbsp;
                    <i className="fa-solid fa-plus "></i>
                </button>
            </div>
        </div>
    )
}

export default addTask;