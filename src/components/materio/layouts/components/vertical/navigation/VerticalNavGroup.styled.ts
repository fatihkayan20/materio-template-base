import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, BoxProps, styled } from "@mui/material";
import themeConfig from "../../../../configs/themeConfig";

export const MenuItemTextWrapper = styled(Box)<BoxProps>(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  transition: "opacity .25s ease-in-out",
  ...(themeConfig.menuTextTruncate && { overflow: "hidden" }),
}));

export const MenuGroupToggleRightIcon = styled(ChevronRight)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: "transform .25s ease-in-out",
}));

export const MenuGroupToggleLeftIcon = styled(ChevronLeft)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: "transform .25s ease-in-out",
}));
