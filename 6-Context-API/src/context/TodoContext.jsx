import { createContext, useContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [todo, setTodo] = useState([]);

    return (
        <TodoContext.Provider value={{ todo, setTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => useContext(TodoContext);