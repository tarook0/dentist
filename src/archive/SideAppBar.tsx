import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { Home, CalendarToday } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";

export const SideAppBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#f5f5f5", // Light gray background
        },
      }}
    >
      <Toolbar /> {/* Empty Toolbar to offset content below the top app bar */}
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate("/")}
            sx={{
              "&:hover": {
                backgroundColor: "#e0e0e0", // Hover effect
              },
            }}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate("/reservations")}
            sx={{
              "&:hover": {
                backgroundColor: "#e0e0e0", // Hover effect
              },
            }}
          >
            <ListItemIcon>
              <CalendarToday />
            </ListItemIcon>
            <ListItemText primary="Reservations" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};