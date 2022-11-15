import { Box, styled } from "@mui/material";

export const AppBarOuter = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(11),
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const AppBarContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 99,
  height: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  padding: "0.5rem 0",

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const LeftIconContainer = styled(Box)(() => ({
  flexBasis: "20%",
  flexGrow: 0,
  flexShrink: 0,
  overflow: "hidden",
}));

export const CenterLogoContainer = styled(LeftIconContainer)(() => ({
  flexBasis: "60%",
  position: "relative",
  overflow: "hidden",
  height: 25,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const RightIconContainer = styled(LeftIconContainer)(() => ({}));
