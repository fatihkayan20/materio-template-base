import { styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import React, { useState } from "react";
import DatePickerWrapper from "../styles/libs/react-datepicker";
import HorizontalNavItems from "./components/horizontal/navigation/HorizontalNavItems";
import navItems from "../../../infrastructure/navigation/horizontal/index";
import AppBar from "./components/vertical/appBar";
import { LayoutProps } from "./types";

const BottomBarLayoutWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  backgroundColor: theme.palette.customColors.darkBg,
}));
const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
});
const ContentWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  padding: theme.spacing(6),
  transition: "padding .25s ease-in-out",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 2),
  },
}));
const BottomBarLayout = (props: LayoutProps): JSX.Element => {
  const { hidden, settings, children } = props;
  const { contentWidth } = settings;
  const [navVisible, setNavVisible] = useState<boolean>(false);
  const toggleNavVisibility = (): void => setNavVisible(!navVisible);
  return (
    <>
      <BottomBarLayoutWrapper className={"layout-wrapper"}>
        <MainContentWrapper className={"layout-content-wrapper"}>
          <AppBar toggleNavVisibility={toggleNavVisibility} {...props} />
          <ContentWrapper
            className={"layout-page-content"}
            sx={{
              paddingBottom: 15,
              ...(contentWidth === "boxed" && {
                mx: "auto",
                "@media (min-width:1440px)": { maxWidth: 1440 },
                "@media (min-width:1200px)": { maxWidth: "100%" },
              }),
            }}>
            {children}
          </ContentWrapper>
          <Box sx={{ height: 83 }} />

          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1,
              background: "white",
              borderTop: "1px solid #e0e0e0",
              padding: ".3rem 1rem",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              ...(contentWidth === "boxed" && {
                mx: "auto",
                "@media (min-width:1440px)": { maxWidth: 1440 },
                "@media (min-width:1200px)": { maxWidth: "100%" },
              }),
            }}>
            <HorizontalNavItems
              horizontalNavItems={navItems()}
              mobile={hidden}
            />
          </Box>
          <DatePickerWrapper sx={{ zIndex: 11 }}>
            <Box id={"react-datepicker-portal"} />
          </DatePickerWrapper>
        </MainContentWrapper>
      </BottomBarLayoutWrapper>
    </>
  );
};
export default BottomBarLayout;
