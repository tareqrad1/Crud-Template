import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddHomeIcon from "@mui/icons-material/AddHome";
import CreateIcon from "@mui/icons-material/Create";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton'
const drawerWidth = 240;

const Drwer = ({theme, setTheme, blockOrnone, close, setBlockOrnone }) => {
  const Navigate = useNavigate();
  const ActiveLinks = useLocation();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            display: { xs: blockOrnone, md: "block" },
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant={close}
          open={true}
          anchor="left"
          onClose={() => {
            setBlockOrnone("none");
          }}
        >
          <IconButton sx={{height:'63px',width:'63px', m:'0 auto'}} onClick={() => {
            return(
              theme === 'dark' ? setTheme('light'): setTheme('dark'),
              localStorage.setItem('currentTheme', theme === 'dark' ? 'light': 'dark')
            )
          }}>
            <DarkModeIcon />
          </IconButton>
          <Divider />

          <List>
            <ListItem
              disablePadding
              onClick={() => Navigate("/home")}
              sx={{
                bgcolor:
                  ActiveLinks.pathname === "/" ||
                  ActiveLinks.pathname === "/home"
                    ? "#90caf9"
                    : "null",
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <AddHomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => Navigate("/create")}
              sx={{
                bgcolor:
                  ActiveLinks.pathname === "/create" ? "#90caf9" : "null",
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <CreateIcon />
                </ListItemIcon>
                <ListItemText primary="Create" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => Navigate('*')}>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => Navigate('*')}>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" onClick={() => Navigate('*')}/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => Navigate('*')}>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default Drwer;
