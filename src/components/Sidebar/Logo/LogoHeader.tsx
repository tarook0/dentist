import { Box } from "@mui/material";

import Logo from "../../../assets/logo-text.png";

interface AlefiotLogoHeaderProps {
  marginRight?: string;
  size?: "sm" | "lg";
}

const LogoHeader = ({ size = "lg" }: AlefiotLogoHeaderProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={Logo}
        width={"auto"}
        height={size === "lg" ? "40px" : "20px"}
        alt="alef Logo"
      />
    </Box>
  );
};

export default LogoHeader;
