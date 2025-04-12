//importing dependencies
import { react } from "react";
import { useState } from "react";
//import css
import "./App.css";
import styles from './components/Button.module.css'
//import components
import Button from "./components/Button";
import List from "./components/List";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function CountButton() {
  const [count, setCount] = useState(0);

  function handleClick(event) {
    event.preventDefault();
    setCount(count + 1);
  }

  return <button onClick={handleClick} className={styles.btn}>Clicked {count} times !</button>;
}

function App() {
  return (
    <div>
      <div className="user">
        <img
          src={user.imageUrl}
          alt={`Photo of ${user.name}`}
          className="avatar"
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
        <h1>Hello {user.name}! Welcome to React !</h1>
      </div>

      <Button />

      <div>
        <List />
      </div>

      <CountButton />
    </div>
  );
}

export default App;
