// import { Box } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Brightness6Icon from '@mui/icons-material/Brightness6';


const Sidebar = ({mode,setMode}) => {
  return (
    <Box
    
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
              <ArticleIcon/>
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
             <GroupsIcon/>
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
              <StorefrontIcon/>
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
              <GroupIcon/>
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
             <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
              <AccountBoxIcon/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon>
              <Brightness6Icon/>
            </ListItemIcon>
            <Switch onChange={e=>setMode(mode==="light"?"dark":"light")} />
          </ListItemButton>

        </ListItem>

      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
