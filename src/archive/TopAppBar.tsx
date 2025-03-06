import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export const TopAppBar: React.FC = () => {
  return (
    <AppBar position="fixed" elevation={4}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            style={{ height: 40 }}
          />
          <Typography variant="h6" noWrap>
            Dentist Reservation System
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};