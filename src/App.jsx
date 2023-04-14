import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import walkingSprite from "./assets/PlayerWalk48x48.png";

function App() {
  return (
    <div className="container">
      <div
        className="simple-character-container"
        style={{ backgroundImage: `url(${walkingSprite})` }}
      ></div>
    </div>
  );
}

export default App;
