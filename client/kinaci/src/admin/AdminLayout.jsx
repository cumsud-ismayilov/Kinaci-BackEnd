import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
  Box,
  ThemeProvider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MailIcon from "@mui/icons-material/Mail";      
import CommentIcon from "@mui/icons-material/Comment";
import darkTheme from "./darktheme";

const drawerWidth = 240;

function AdminLayout() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        {/* Top AppBar */}
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Admin Panel
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Sidebar Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <List>
            <ListItem button component={Link} to="/admin">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/admin/users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button component={Link} to="/admin/properties">
              <ListItemIcon>
                <HomeWorkIcon />
              </ListItemIcon>
              <ListItemText primary="Properties" />
            </ListItem>
            <ListItem button component={Link} to="/admin/contacts">
              <ListItemIcon>
                <MailIcon /> {/* İstəsən fərqli icon qoy */}
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </ListItem>
            <ListItem button component={Link} to="/admin/comments">
              <ListItemIcon>
                <CommentIcon />{" "}
                {/* Daha uyğun icon seçə bilərsən, məsələn CommentIcon */}
              </ListItemIcon>
              <ListItemText primary="Comments" />
            </ListItem>
          </List>
        </Drawer>

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default AdminLayout;
