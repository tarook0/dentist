import { Box, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import LogoHeader from "./Logo/LogoHeader";
import Logo from "./Logo/Logo";

const SidebarLogo = ({
  sidebarExpanded,
  // size = "lg",
}: {
  sidebarExpanded?: boolean;
  size?: "sm" | "lg";
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "70px",
        width: !sidebarExpanded ? "90px" : "100%",
        borderBottom: { xs: "", sm: "1px solid" },
        borderColor: `${theme.palette.background.divider} !important`,
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          width: "100%",
        }}
      >
        {!sidebarExpanded && <Logo/>}
        {sidebarExpanded && (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
           <LogoHeader/>
          </Box>
        )}
      </Link>
    </Box>
  );
};

export default SidebarLogo;
