import { useState } from "react";

function TaskCard(props) {

    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(props.task.todo);


    function handletaskCompletion(id) {
        console.log("handletaskCompletion is triggered")
        props.setTodo((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, status: !task.status }
                    : task
            )
        );
    }

    function handleDelete(id) {
        props.setTodo((prev) => prev.filter((task) => task.id !== id));
    }

    function handleIsEditing() {
        setIsEditing(true);
    }

    function handleTaskEdit(id) {
        props.setTodo((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, todo: editValue } : task
            )
        )
        setIsEditing(false);
    }


    return (
        <div className="card d-flex justify-content-between align-items-center flex-row p-3 m-3" style={{ width: "22rem" }}>
            <div className="d-flex align-items-center">
                <div id="radio" onClick={() => handletaskCompletion(props.task.id)}>
                    {
                        props.task.status === false ? <i className="fa-regular fa-circle-dot"></i> : <i className="fa-solid fa-circle-dot"></i>
                    }
                </div>
                <div id="taskDetails" className="ms-3">
                    {isEditing ? (
                        <input
                            type="text"
                            value={editValue}
                            onChange={(event) => setEditValue(event.target.value)}
                            onBlur={() => handleTaskEdit(props.task.id)}
                            autoFocus
                            className="form-control"
                        />) : (
                        <p
                            className={`fs-3 m-0 ${props.task.status === true ? "text-secondary text-decoration-line-through" : ""}`}
                            onDoubleClick={handleIsEditing}
                            style={{ cursor: "pointer" }}
                        >
                            {props.task.todo}
                        </p>
                    )
                    }

                </div>
            </div>
            <div>
                <button className="btn btn-danger rounded-circle d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }} onClick={() => handleDelete(props.task.id)}>
                    <i className="fa-solid fa-trash m-0"></i>
                </button>
            </div>
        </div>
    );
}

export default TaskCard;