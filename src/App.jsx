// import reactLogo from "./assets/react.svg";
// import eggsyLogo from "./assets/img/eggsy.png";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Branches from "./pages/Branches";
import NoPage from "./pages/NoPage";
import { Container } from "@mui/material";
function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ flexGrow: "1", minHeight: "85vh" }}>
        <Routes>
          <Route path="/eggsy/" Component={Home} />
          <Route path="/eggsy/about" Component={About} />
          <Route path="/eggsy/branches" Component={Branches} />
          <Route path="/eggsy/contact-us" Component={ContactUs} />
          <Route path="*" Component={NoPage} />
          {/* <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/branches" Component={Branches} />
          <Route path="/contact-us" Component={ContactUs} />
          <Route path="*" Component={NoPage} /> */}
        </Routes>
      </Container>

      <Footer />
      {/* <p>
        <i>@Nelzkie</i>
      </p> */}
    </>
  );
}

export default App;
