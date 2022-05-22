// rafce
import { Pets, Mail } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, InputBase, Avatar, Menu, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import NotificationsIcon from "@mui/icons-material/Notifications";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {

  const [open,setOpen] = useState(false)




  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          NAVBAR
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search here" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>

          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"

            onClick={e=>setOpen(true)}
          />
        </Icons>

        <UserBox  onClick={e=>setOpen(true)} >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
          />

          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
