// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
import { selectNavValue } from "../redux/navigationSlice";
import Home from "./Home";
import About from "./About";
import Branches from "./Branches";
import ContactUs from "./ContactUs";
function MainPage() {
  const selectedComponent = useSelector(selectNavValue);

  return (
    <>
      {(selectedComponent === "home" ||
        selectedComponent === undefined ||
        selectedComponent === "") && <Home />}
      {selectedComponent === "about" && <About />}
      {selectedComponent === "branches" && <Branches />}
      {selectedComponent === "contactus" && <ContactUs />}
    </>
  );
}

export default MainPage;
