// eslint-disable-next-line no-unused-vars
import * as React from "react";

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
export default function Navbar() {
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
              <Link to="/">
                <img
                  src={eggsy}
                  alt="EGGSY PUTO OVERLOAD"
                  style={{ width: "100px", verticalAlign: "middle" }}
                />
              </Link>
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                color="inherit"
                sx={{
                  textTransform: "capitalize",
                  display: { xs: "none", sm: "block", color: "#fff" },
                }}
              >
                Home
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button
                color="inherit"
                sx={{
                  textTransform: "capitalize",
                  display: { xs: "none", sm: "block", color: "#fff" },
                }}
              >
                About
              </Button>
            </Link>
            <Link to="/branches" style={{ textDecoration: "none" }}>
              <Button
                color="inherit"
                sx={{
                  textTransform: "capitalize",
                  display: { xs: "none", sm: "block", color: "#fff" },
                }}
              >
                Branches
              </Button>
            </Link>

            <Link to="/contact-us" style={{ textDecoration: "none" }}>
              <Button
                color="inherit"
                sx={{
                  textTransform: "capitalize",
                  display: { xs: "none", sm: "block", color: "#fff" },
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
