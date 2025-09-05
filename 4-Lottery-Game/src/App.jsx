import Lottery from "./pages/Lottery.jsx"

function App() {

  return (
    <div className="container d-flex justify-content-center align-items-center " style={{ height: "100vh" }}>
      <Lottery length={3}></Lottery>
    </div>
  )
}

export default App
