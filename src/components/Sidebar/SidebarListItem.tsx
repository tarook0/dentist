import { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Button,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface SidebarItem {
  title: string;
  icon?: string | React.ReactNode;
  hoverIcon?: string | React.ReactNode; 
  url?: string;
}

type PropTypes = {
  item: SidebarItem;
  sidebarExpanded?: boolean;
  selected?: boolean;
  setSidebarExpanded?: (expanded: boolean) => void;
};

const SidebarListItem = ({
  item: MainItem,
  sidebarExpanded = false,
  setSidebarExpanded,
  selected,
}: PropTypes) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [hoveredIcon, setHoveredIcon] = useState<boolean>(false); // Track hover state
  const navigate = useNavigate();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (expanded) {
      setExpanded((prev) => !prev);
    }
  }, [sidebarExpanded]);

  return (
    <>
      <Stack direction="row" justifyContent={"space-between"}>
        <Button
          onClick={() => {
            navigate(MainItem.url!);
            if (smallScreen) setSidebarExpanded?.(false);
          }}
          onMouseEnter={() => setHoveredIcon(true)} // Set hover state to true
          onMouseLeave={() => setHoveredIcon(false)} // Set hover state to false
          startIcon={hoveredIcon ? MainItem.hoverIcon : MainItem.icon} // Conditionally render icon
          sx={{
            color: "primary",
            opacity: 1,
            pointerEvents: "auto",
            cursor: "pointer",
            py: smallScreen ? "auto" : 0,
            pl: 4,
            mr: -60,
            ml: smallScreen ? 0 : -2,
            borderRadius: 0,
            height: 32,
            width: "calc(100% + 16px)",
            position: "relative",
            justifyContent: "flex-start",
            "&>.MuiButton-endIcon": {
              ml: "auto",
            },
            "&>.MuiButton-startIcon": {
              pl: 1,
            },
            ":hover": {
              bgcolor: "transparent",
              color: "primary.main",
              transition: "all 1ms",
            },
          }}
        >
          <Box
            width={4}
            height={smallScreen ? 38 : 32}
            borderRadius="0px 20px 20px 0px"
            bgcolor={selected ? theme.palette.secondary.main : "transparent"}
            position="absolute"
            top={0}
            left={0}
          />
          {sidebarExpanded && (
            <Typography variant="body1" noWrap>
              {MainItem.title}
            </Typography>
          )}
        </Button>
        {!sidebarExpanded ? null : !expanded ? (
          <IconButton
            onClick={() => setExpanded((prev) => !prev)}
            sx={{
              color: selected
                ? theme.palette.primary.main
                : theme.palette.grey[500],
            }}
          ></IconButton>
        ) : (
          <IconButton
            onClick={() => setExpanded((prev) => !prev)}
            sx={{
              color: selected
                ? theme.palette.primary.main
                : theme.palette.grey[500],
            }}
          ></IconButton>
        )}
      </Stack>

      <Box
        component={"ul"}
        sx={{
          listStyle: "none",
          borderLeft: "2px solid #ABADB1",
          pl: 2,
          ml: "32px!important",
          mt: "0!important",
          mb: "0!important",
          display: expanded && sidebarExpanded ? "block" : "none",
          transition: "display ease-out 500ms",
        }}
      ></Box>
    </>
  );
};

export default SidebarListItem;