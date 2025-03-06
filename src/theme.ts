import { createTheme } from "@mui/material";

const themeCreator = (type: "light" | "dark") =>
  createTheme({
    palette: {
      mode: type,
      primary: {
        main: "#1677ff",
        5: type === "dark" ? "#1F2A3B" : "#F3F8FF",
        10: type === "dark" ? "#1E2F45" : "#E8F2FF",
        20: type === "dark" ? "#093066" : "#D0E4FF",
        40: type === "dark" ? "#0D4799" : "#A2C9FF",
        60: type === "dark" ? "#125FCC" : "#73ADFF",
      },

      secondary: {
        main: "#79B8FF",
      },
      // breasts: {
      //   main: "#660066",
      // },

      grey: {
        main: "#ABADB1",
        10: type === "dark" ? "#3C3E41" : "#F7F8F9",
        20: type === "dark" ? "#3C3E41" : "#EEEFEF",
        30: type === "dark" ? "#494C4F" : "#E6E7E8",
        50: type === "dark" ? "#65676A" : "#D5D6D8",
        60: type === "dark" ? "#65676A" : "#666",
      },

      background: {
        default: type === "dark" ? "#101315" : "#F3F4F5",
        backgroundWhite: type === "dark" ? "#101315" : "#ffffff",
        paper: type === "dark" ? "#202225" : "#ffffff",
        paperTransparent: type === "dark" ? "#20222566" : "#FFFFFF66",
        paperTransparentLighter: type === "dark" ? "#20222599" : "#FFFFFF99",
        navbar: type === "dark" ? "#1E2022" : "#ffffff",
        divider: type === "dark" ? "#343638" : "#E2E3E4",
        paperDivider: type === "dark" ? "#343638" : "#EDEDED",
        hover: type === "dark" ? "#343638" : "#E8EBF3",
        paperHover: type === "dark" ? "#414345" : "#F3F4F8",
        primaryDivider: type === "dark" ? "#398BFF" : "#146FED",
      },

      text: {
        primary: type === "dark" ? "#ffffff" : "#000000",
        secondary: "#ABADB1",
        tertiary: type === "dark" ? "#DEDFE0" : "#666666",
        white: "#ffffff",
      },

      status: {
        yellow: "#DFC875",
        yellowTint: type === "dark" ? "#33332D" : "#FCFAF2",
        green: "#5EB18E",
        greenTint: type === "dark" ? "#26312F" : "#EFF8F4",
        red: "#E76060",
        redTint: type === "dark" ? "#34292B" : "#FDF0F0",
        orange: "#F09610",
        orangeTint: type === "dark" ? "#352E23" : "#FEF5E8",
        grey: "#ABADB1",
        greyTint: type === "dark" ? "#2E3033" : "#F7F7F8",
        primary: "#1677FF",
        primaryTint: type === "dark" ? "#1F2B3A" : "#E8F2FF",
        secondary: "#79B8FF",
        secondaryTint: type === "dark" ? "#2D3945" : "#EBF5FF",
        lightGreen: "#7CB342",
        reef: "#C5E1A5",
        chardonnay: "#FFCC80",
        lightOrange: "#FF824D",
        white: "#ffffff",
        breasts: "#660066",
      },
      backgroundGradient:
        "linear-gradient(214deg, rgba(22, 119, 255, 0.21), rgba(22, 119, 255, 0.05))",
    },

    typography: {
      fontFamily: "Poppins",
      h1: {
        fontSize: 32,
      },
      h2: {
        fontSize: 24,
      },
      h3: {
        fontSize: 18,
      },
      subtitle1: {
        fontSize: 16,
      },
      subtitle2: {
        fontSize: 14,
      },
      body1: {
        fontSize: 14,
      },
      body2: {
        fontSize: 12,
      },
      button: {
        fontSize: 16,
      },
    },

    components: {
      MuiTypography: {
        defaultProps: { variant: "subtitle1" },
      },

      MuiLink: {
        defaultProps: {
          sx: {
            textDecoration: "none",
          },
        },
      },

      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: "16px",
            marginTop: "-2rem",
            backgroundImage: "none",
          },
        },
      },
      MuiAccordion: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            "&:before": {
              backgroundColor: "transparent",
            },
          },
        },
      },

      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: "8px",
            textTransform: "capitalize",
          },
        },
      },
    },
  });

export default themeCreator;
