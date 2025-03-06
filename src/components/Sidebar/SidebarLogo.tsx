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
        to="/reservations"
        style={{
          textDecoration: "none",
          width: "100%",
        }}
      >
        {!sidebarExpanded && <Logo/>}
        {/* <img
          src={icons.logo}
          width="auto"
          height="29px"
          alt="logo"
          style={{ display: !sidebarExpanded ? "inline-block" : "none", marginTop: ".1rem" }}
        /> */}
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
