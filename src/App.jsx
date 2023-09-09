// import reactLogo from "./assets/react.svg";
// import eggsyLogo from "./assets/img/eggsy.png";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/Footer";
import { Container } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MainPage from "./pages/MainPage";
import NoPage from "./pages/NoPage";
function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Container sx={{ flexGrow: "1", minHeight: "85vh" }}>
          <MainPage />
          <Routes>
            {/* <Route path="/eggsy/" Component={Home} />
            <Route path="/eggsy/about" Component={About} />
            <Route path="/eggsy/branches" Component={Branches} />
            <Route path="/eggsy/contact-us" Component={ContactUs} />
            <Route path="*" Component={NoPage} />  */}
            {/* <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/branches" Component={Branches} />
          <Route path="/contact-us" Component={ContactUs} /> */}
            <Route path="/eggsy" /> {/*remove eggsy once deployed*/}
            <Route path="*" Component={NoPage} />
          </Routes>
        </Container>

        <Footer />
      </Provider>

      {/* <p>
        <i>@Nelzkie</i>
      </p> */}
    </>
  );
}

export default App;
