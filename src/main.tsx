import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.tsx";
import themeCreator from "./theme.ts";
import { ThemeProvider } from "@mui/material";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={() => themeCreator("light")}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
