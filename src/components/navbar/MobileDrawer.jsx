// LeftDrawer.jsx
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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const MobileDrawer = ({ open, onClose, onClick }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerHeader>
        <Zoom in={open} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Zoom>
      </DrawerHeader>

      <List sx={{ width: "210px", padding: "10px 20px" }}>
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
          >
            {/* <ListItemIcon>Add an icon</ListItemIcon> */}
            <ListItemText primary="Contact Us" />
          </ListItem>
        </Slide>
        {/* Add more list items as needed */}
      </List>
    </Drawer>
  );
};

export default MobileDrawer;
