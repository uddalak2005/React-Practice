import { useState } from "react";

function TaskCard(props) {



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


    return (
        <div className="card d-flex justify-content-flex-start align-items-center flex-row p-3 m-3" style={{ width: "22rem" }}>
            <div id="radio" onClick={() => handletaskCompletion(props.task.id)}>
                {
                    props.task.status === false ? <i className="fa-regular fa-circle-dot"></i> : <i className="fa-solid fa-circle-dot"></i>
                }
            </div>
            <div id="taskDetails" className="ms-3">
                <h3 className={props.task.status === true ? "text-secondary text-decoration-line-through" : ""}>{props.task.todo}</h3>
            </div>
        </div>
    );
}

export default TaskCard;