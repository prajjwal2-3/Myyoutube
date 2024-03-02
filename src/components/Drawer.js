import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import RestoreIcon from "@mui/icons-material/Restore";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import QueueIcon from "@mui/icons-material/Queue";
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      className="w-64 h-screen bg-zinc-900 text-white"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {["Home", "Shorts", "Subscriptions", "History"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon className="text-white">
                {text === "Home" ? (
                  <HomeIcon />
                ) : text === "Shorts" ? (
                  <WhatshotIcon />
                ) : text === "Subscriptions" ? (
                  <SubscriptionsIcon />
                ) : (
                  <RestoreIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Your channel", "Your videos", "Watch later"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon className="text-white">
                {text === "Your channel" ? (
                  <AccountBoxIcon />
                ) : text === "Your videos" ? (
                  <SlideshowIcon />
                ) : (
                  <QueueIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        {" "}
        <MenuIcon className="text-slate-200" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
