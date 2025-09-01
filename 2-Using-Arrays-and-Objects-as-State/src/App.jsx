import "./App.css";
import LudoBoard from "./LudoBoard";
import { useState } from "react";

function App() {
  const [playerName, setPlayerName] = useState("Guest");

  function handlePlayerName(event) {
    setPlayerName(event.target.value)
  }

  return (
    <>
      <input type="text" placeholder="Enter Your Name" value={playerName} onChange={handlePlayerName}></input>
      <LudoBoard player={playerName} />
    </>
  )
}

export default App;