import { useContext } from "react";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";
import { TodoContext } from "../context/TodoContext";


function TodoList() {

    const { todo } = useContext(TodoContext);


    return (
        <div id="todoList" className="w-100 d-flex justify-content-center align-items-center flex-column">

            <h1 className="mb-5"><strong>Todo List</strong></h1>
            <AddTask />

            <div>
                {todo.map((task) => {
                    return <TaskCard key={task.id} task={task} />;
                })}
            </div>
        </div>

    )
}

export default TodoList