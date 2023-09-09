/* eslint-disable react/prop-types */
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  styled,
  Slide,
  Grow,
  Zoom,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SocialIcon } from "react-social-icons";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const MobileDrawer = ({ open, onClose, onClick, pageVal }) => {
  console.log(pageVal);
  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root-MuiDrawer-paper": {
          backgroundColor: "blue !important", // Replace with your desired background color
        },
      }}
    >
      <Box sx={{ height: "100%", background: "rgba(0, 0, 0, 0.87)" }}>
        <DrawerHeader>
          <Zoom in={open} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
            <IconButton onClick={onClose} sx={{ color: "#fff" }}>
              <CloseIcon />
            </IconButton>
          </Zoom>
        </DrawerHeader>

        <List
          sx={{
            width: "210px",
            padding: "10px 20px",
          }}
        >
          <Slide
            direction="right"
            in={open}
            style={{ transformOrigin: "0 0 0" }}
            {...(open ? { timeout: 300 } : {})}
          >
            <ListItem
              button
              onClick={() => {
                onClick("home");
                onClose();
              }}
              sx={{
                color:
                  pageVal === "home" || pageVal === "" ? "#ff9900" : "#fff",
                // borderLeft:
                //   pageVal === "home" || pageVal === ""
                //     ? "2px solid #ff9900"
                //     : "2px solid transparent",
              }}
            >
              {/* <ListItemIcon>Add an icon</ListItemIcon> */}
              <ListItemText primary="Home" />
            </ListItem>
          </Slide>
          <Slide
            in={open}
            direction="right"
            style={{ transformOrigin: "0 0 0" }}
            {...(open ? { timeout: 400 } : {})}
          >
            <ListItem
              button
              onClick={() => {
                onClick("about");
                onClose();
              }}
              sx={{
                color: pageVal === "about" ? "#ff9900" : "#fff",
                // borderLeft:
                //   pageVal === "about"
                //     ? "2px solid #ff9900"
                //     : "2px solid  transparent",
              }}
            >
              {/* <ListItemIcon>Add an icon</ListItemIcon> */}
              <ListItemText primary="About" />
            </ListItem>
          </Slide>
          <Slide
            in={open}
            direction="right"
            style={{ transformOrigin: "0 0 0" }}
            {...(open ? { timeout: 500 } : {})}
          >
            <ListItem
              button
              onClick={() => {
                onClick("branches");
                onClose();
              }}
              sx={{
                color: pageVal === "branches" ? "#ff9900" : "#fff",
                // borderLeft:
                //   pageVal === "branches"
                //     ? "2px solid #ff9900"
                //     : "2px solid transparent",
              }}
            >
              {/* <ListItemIcon>Add an icon</ListItemIcon> */}
              <ListItemText primary="Branches" />
            </ListItem>
          </Slide>
          <Slide
            in={open}
            direction="right"
            style={{ transformOrigin: "0 0 0" }}
            {...(open ? { timeout: 600 } : {})}
          >
            <ListItem
              button
              onClick={() => {
                onClick("contactus");
                onClose();
              }}
              sx={{
                color: pageVal === "contactus" ? "#ff9900" : "#fff",
                // borderLeft:
                //   pageVal === "contactus"
                //     ? "2px solid #ff9900"
                //     : "2px solid  transparent",
              }}
            >
              {/* <ListItemIcon>Add an icon</ListItemIcon> */}
              <ListItemText primary="Contact Us" />
            </ListItem>
          </Slide>
          <Box
            sx={{
              borderTop: "1px solid #fff",
              marginTop: "4rem",
              paddingTop: "2rem",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <SocialIcon
              network="facebook"
              url="https://facebook.com"
              bgColor="#ff9900"
              fgColor="white"
              style={{
                borderRadius: "5px",
                background: "#ff9900",
                width: "40px",
                height: "40px",
              }}
            />
            <SocialIcon
              network="instagram"
              url="https://instagram.com"
              bgColor="#ff9900"
              fgColor="white"
              style={{
                borderRadius: "5px",
                background: "#ff9900",
                width: "40px",
                height: "40px",
              }}
            />
            <SocialIcon
              network="tiktok"
              url="https://tiktok.com"
              bgColor="#ff9900"
              fgColor="white"
              style={{
                borderRadius: "5px",
                background: "#ff9900",
                width: "40px",
                height: "40px",
              }}
            />
          </Box>
          {/* Add more list items as needed */}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
