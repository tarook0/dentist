import { Box, Stack, SxProps, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import SidebarListItem from "./SidebarListItem";
import SidebarLogo from "./SidebarLogo";
import { useLocation } from "react-router-dom";
import { CalendarToday } from "@mui/icons-material";

export interface SidebarItem {
  title: string;
  icon?: string | React.ReactNode;
  url?: string;
}
const items: SidebarItem[] = [
  {
    title: "Reservations",
    icon: <CalendarToday />,
    url: "/reservations",
  },
];

const Sidebar = ({
  expanded,
  setExpanded,
}: {
  expanded: boolean;
  setExpanded: React.Dispatch<boolean>;
}) => {
  const [containerWidth, setContainerWidth] = useState<string | number | null>(
    null
  );
  const location = useLocation();
  // const navigate = useNavigate();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const sidebarContainerStyle: SxProps = {
    transition: "width ease-out 300ms",
    left: 0,
    width: { xs: expanded ? 320 : 0, sm: expanded ? 270 : 90 },
    position: "fixed",
    top: 0,
    backgroundColor: theme.palette.background.navbar,
    overflowX: expanded ? "visible" : "hidden",
    zIndex: 100,
  };
  console.log(containerWidth)

  useEffect(() => {
    renderContainerWidth();
  }, [smallScreen, expanded]);

  const renderContainerWidth = () => {
    if (smallScreen && expanded) {
      setContainerWidth("85%");
    } else if (smallScreen && !expanded) {
      setContainerWidth("0");
    } else {
      setContainerWidth(null);
    }
  };

  return (
    <Box
      component={"aside"}
      minHeight={"150vh"}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      sx={{
        ...sidebarContainerStyle,
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "3px 0px 25px rgba(32, 35, 45, 0.12);"
            : "3px 0px 23px rgba(206, 213, 216, 0.15)",
        width:smallScreen?null: containerWidth,
      }}
    >
      {<SidebarLogo sidebarExpanded={expanded} />}
      <Box
        width={{ xs: expanded ? 320 : 0, sm: expanded ? 270 : 90 }}
        px={smallScreen ? 0 : 2}
        py={smallScreen ? 2 : 2}
        sx={{
          transition: "all 0.3s",
        }}
      >
        <Stack
          gap={1}
          sx={
            smallScreen
              ? {
                  height: "100%",
                  maxHeight: "100vh",
                  overflowY: "scroll",
                  scrollbarWidth: "none",
                }
              : {}
          }
        >
          {items?.map((item: SidebarItem, index) => {
            return (
              <Box key={index} px={smallScreen ? 2 : 0}>
                <SidebarListItem
                  sidebarExpanded={expanded}
                  setSidebarExpanded={setExpanded}
                  item={item}
                  selected={
                    item.url ? location.pathname.includes(item.url) : false
                  }
                />
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default Sidebar;
