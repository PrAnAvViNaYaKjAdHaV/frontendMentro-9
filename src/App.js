import React, { useState, useEffect } from "react";
import "./App.css";
import Divider from "./images/pattern-divider-desktop.svg";
import  Dice from "./images/icon-dice.svg";
import Avtar from "./Avtar";
function App() {
  const [posts, setPosts] = useState({id:"",text:""});
 
  async function api() {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    const data = await response.json();
    setPosts({
      id: data.slip.id,
      text: data.slip.advice,
    });
  }
  useEffect(()=>{
    api();
  },[]);
  return (
    <main>
      <div className="Container">
        <section>
          <p>Advice #{posts.id}</p>
          <p>"{posts.text}"</p>
        </section>
        <div className="bottom">
          <Avtar
            className="divider"
            url={Divider}
            alt="divider"
          />
          <Avtar
            className="button"
            url={Dice}
            alt="dice"
            click={api}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
