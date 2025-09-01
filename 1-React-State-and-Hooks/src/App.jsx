import './App.css'
import { useState } from 'react';
import LikeButton from './LikeButton';

function App() {

  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);

  function handleLikeButton() {
    console.log("Like Button is triggered");
    let newLikeState = !isLiked;
    setIsLiked(newLikeState);
  }

  function handleIncCount() {
    setCount(count + 1);
    console.log(`Count Inside increase count ${count}`);
  }


  return (
    <div>
      <h1>Hello from react</h1>
      <div>
        <p>Like as a Button</p>
        <button onClick={handleLikeButton}>
          {isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
        </button>

        <hr />
        <p>Like as an Element</p>
        <i className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"} onClick={handleLikeButton}></i>

        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <LikeButton />
          <LikeButton />
          <LikeButton />
          <LikeButton />
        </div>

        <button onClick={handleIncCount}>
          Click to Increase Count {count}
        </button>
      </div>
    </div>
  )
}

export default App;