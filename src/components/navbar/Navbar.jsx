// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import eggsy from "../../assets/img/eggsy.png";
import MobileDrawer from "./MobileDrawer";

import { useDispatch } from "react-redux";
import { updateNav } from "../../redux/navigationSlice";
export default function Navbar() {
  const [nav, setNav] = useState("");
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleChange = (value) => {
    const newValue = value;
    setNav(newValue);
    // Dispatch the action with the new string value as payload
    dispatch(updateNav(newValue));
    console.log(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "rgb(0, 0, 0)" }}>
        <Container>
          <Toolbar
            sx={{
              "@media (max-width: 450px)": {
                paddingX: "0",
              },
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="home"
              onClick={toggleDrawer}
              sx={{ mr: 1, display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              display="flex"
              alignItems="center"
              component="div"
              variant="h6"
              sx={{
                height: "48px",
                color: "#fff",
                textDecoration: "none",
                position: "relative",
                flexGrow: 1,
              }}
            >
              {/* <Link to="/eggsy"> */}
              {/* <Link to="/"> */}

              <img
                src={eggsy}
                alt="EGGSY PUTO OVERLOAD"
                style={{ width: "100px", verticalAlign: "middle" }}
                onClick={() => handleChange("home")}
              />
              {/* </Link> */}
            </Typography>
            {/* <Link to="/eggsy" style={{ textDecoration: "none" }}> */}
            <Button
              color="inherit"
              onClick={() => handleChange("home")}
              sx={{
                textTransform: "capitalize",
                display: { xs: "none", sm: "block", color: "#fff" },
              }}
            >
              Home
            </Button>
            {/* </Link> */}
            {/* <Link to="/eggsy/about" style={{ textDecoration: "none" }}> */}
            <Button
              color="inherit"
              onClick={() => handleChange("about")}
              sx={{
                textTransform: "capitalize",
                display: { xs: "none", sm: "block", color: "#fff" },
              }}
            >
              About
            </Button>
            {/* </Link> */}
            {/* <Link to="/eggsy/branches" style={{ textDecoration: "none" }}> */}
            <Button
              color="inherit"
              onClick={() => handleChange("branches")}
              sx={{
                textTransform: "capitalize",
                display: { xs: "none", sm: "block", color: "#fff" },
              }}
            >
              Branches
            </Button>
            {/* </Link> */}

            {/* <Link to="/eggsy/contact-us" style={{ textDecoration: "none" }}> */}
            <Button
              color="inherit"
              onClick={() => handleChange("contactus")}
              sx={{
                textTransform: "capitalize",
                display: { xs: "none", sm: "block", color: "#fff" },
              }}
            >
              Contact Us
            </Button>
            {/* </Link> */}
          </Toolbar>
        </Container>
      </AppBar>
      <MobileDrawer
        open={drawerOpen}
        onClose={toggleDrawer}
        onClick={(v) => handleChange(v)}
      />
    </Box>
  );
}
