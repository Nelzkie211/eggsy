// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import eggsyLogo from "./assets/img/eggsy.png";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"></Route>
      </Routes>
      {/* <p>
        <i>@Nelzkie</i>
      </p> */}
    </>
  );
}

export default App;
