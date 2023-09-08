// eslint-disable-next-line no-unused-vars
import * as React from "react";
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
              <a href="/eggsy/">
                <img
                  src={eggsy}
                  alt="EGGSY PUTO OVERLOAD"
                  style={{ width: "100px", verticalAlign: "middle" }}
                />
              </a>
            </Typography>
            <Button
              color="inherit"
              sx={{
                textTransform: "capitalize",
                display: { xs: "none", sm: "block" },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "capitalize",
                display: { xs: "none", sm: "block" },
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "capitalize",
                display: { xs: "none", sm: "block" },
              }}
            >
              Branches
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "capitalize",
                display: { xs: "none", sm: "block" },
              }}
            >
              Contact Us
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
