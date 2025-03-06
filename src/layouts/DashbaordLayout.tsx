import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "../components/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false);
  return (
    <Box sx={{ display: "flex", ml: "4rem" }}>
      <CssBaseline />
      <Sidebar expanded={sidebarExpanded} setExpanded={setSidebarExpanded} />
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        {children}
      </Box>
    </Box>
  );
};
