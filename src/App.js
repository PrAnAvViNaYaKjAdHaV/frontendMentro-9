import React from "react";
import "./App.css";
import { ReactComponent as Divider } from "./images/pattern-divider-desktop.svg";
import { ReactComponent as Dice } from "./images/icon-dice.svg";
function click(){
  console.log(fetch("https://api.adviceslip.com/advice"));
}
function App() {
  return (
    <main>
      <div className="Container">
        <div className="Content flexCon">
          <p>hii</p>
          <h1>bye</h1>
          <div className="dice flexCon">
            <span className="divider">
              <Divider />
            </span>
            <span className="button flexCon" onClick={click}>
              <Dice />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
