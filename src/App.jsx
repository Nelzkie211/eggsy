// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import eggsyLogo from "./assets/img/eggsy.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img src={reactLogo} className="logos logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img src={eggsyLogo} className="logo eggsy" alt="Vite logo" />
        </a>
      </div>
      <p className="read-the-docs">Coming soon</p>
      <p className="read-the-docs">
        <i>@Nelzkie</i>
      </p>
    </>
  );
}

export default App;
