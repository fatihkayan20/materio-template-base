import { Paper, styled } from "@mui/material";
import MuiListItem, { ListItemProps } from "@mui/material/ListItem";
import themeConfig from "../../../../configs/themeConfig";
import { hexToRGBA } from "../../../../utils/hex-to-rgba";

export const ListItem = styled(MuiListItem)<ListItemProps>(({ theme }) => ({
  cursor: "pointer",
  paddingTop: theme.spacing(2.25),
  paddingBottom: theme.spacing(2.25),
  "&:hover": {
    background: theme.palette.action.hover,
  },
}));

export const NavigationMenu = styled(Paper)(({ theme }) => ({
  overflowY: "auto",
  overflowX: "hidden",
  padding: theme.spacing(2, 0),
  maxHeight: "calc(100vh - 13rem)",
  backgroundColor: theme.palette.background.paper,
  ...(themeConfig.menuTextTruncate ? { width: 260 } : { minWidth: 260 }),
  "&::-webkit-scrollbar": {
    width: 6,
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: 20,
    background: hexToRGBA(
      theme.palette.mode === "light" ? "#B0ACB5" : "#575468",
      0.6,
    ),
  },
  "&::-webkit-scrollbar-track": {
    borderRadius: 20,
    background: "transparent",
  },
  "& .MuiList-root": {
    paddingTop: 0,
    paddingBottom: 0,
  },
  "& .menu-group.Mui-selected": {
    borderRadius: 0,
    backgroundColor: theme.palette.action.hover,
  },
}));
