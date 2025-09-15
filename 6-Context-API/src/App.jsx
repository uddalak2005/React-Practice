// import './App.css';
import TodoList from './pages/TodoList';
import { TodoProvider } from './context/TodoContext';

function App() {

  return (
    <div className="container w-100 d-flex justify-content-center align-items-center flex-row" style={{ height: "100vh" }}>
      <TodoProvider>
        < TodoList />
      </TodoProvider>
    </div>
  )
}

export default App
