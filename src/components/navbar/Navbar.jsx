// eslint-disable-next-line no-unused-vars
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "rgb(0, 0, 0)" }}>
      <AppBar position="static" sx={{ bgcolor: "rgb(0, 0, 0)" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          >
            <MenuIcon
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EGGSY
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
      </AppBar>
    </Box>
  );
}
