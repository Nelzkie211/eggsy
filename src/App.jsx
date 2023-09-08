// import reactLogo from "./assets/react.svg";
// import eggsyLogo from "./assets/img/eggsy.png";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Branches from "./pages/Branches";
import NoPage from "./pages/NoPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/branches" Component={Branches} />
        <Route path="/contact-us" Component={ContactUs} />
        <Route path="*" Component={NoPage} />
      </Routes>
      {/* <p>
        <i>@Nelzkie</i>
      </p> */}
    </>
  );
}

export default App;
