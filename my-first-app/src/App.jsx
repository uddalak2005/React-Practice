import { react } from "react";
//import css
import './App.css'
//import components
import Button from "./components/Button";
import List from './components/List'


const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function App() {
  return (
    <div>
      <div className="user">
        <img
          src={user.imageUrl}
          alt={`Photo of ${user.name}`}
          className = "avatar"
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
    </div>
  );
}

export default App;
