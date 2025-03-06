import { Box } from "@mui/material";
import Logo1 from "../../../assets/Logo.png";

const Logo = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img src={Logo1} width={"40px"} height={"40px"} alt="alef Logo" />
    </Box>
  );
};

export default Logo;
