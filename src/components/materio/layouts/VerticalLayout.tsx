import { styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import { useState } from "react";
import themeConfig from "../configs/themeConfig";
import DatePickerWrapper from "../styles/libs/react-datepicker";
import Footer from "./components/shared-components/footer";
import AppBar from "./components/vertical/appBar";
import Navigation from "./components/vertical/navigation";
import { LayoutProps } from "./types";

const VerticalLayoutWrapper = styled("div")({
  height: "100%",
  display: "flex",
});
const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
});
const ContentWrapper = styled("main")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  padding: theme.spacing(6),
  transition: "padding .25s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));
const VerticalLayout = (props: LayoutProps): React.ReactElement => {
  const { settings, children } = props;
  const { skin, navHidden, contentWidth } = settings;
  const { navigationSize, collapsedNavigationSize } = themeConfig;
  const navWidth = navigationSize;
  const navigationBorderWidth = skin === "bordered" ? 1 : 0;
  const collapsedNavWidth = collapsedNavigationSize;
  const [navHover, setNavHover] = useState<boolean>(false);
  const [navVisible, setNavVisible] = useState<boolean>(false);
  const toggleNavVisibility = (): void => setNavVisible(!navVisible);
  return (
    <>
      <VerticalLayoutWrapper className={"layout-wrapper"}>
        {/* Navigation Menu */}
        {navHidden &&
        themeConfig.layout === "vertical" &&
        !(navHidden && settings.lastLayout === "horizontal") ? null : (
          <Navigation
            navWidth={navWidth}
            navHover={navHover}
            navVisible={navVisible}
            setNavHover={setNavHover}
            setNavVisible={setNavVisible}
            collapsedNavWidth={collapsedNavWidth}
            toggleNavVisibility={toggleNavVisibility}
            navigationBorderWidth={navigationBorderWidth}
            {...props}
          />
        )}
        <MainContentWrapper className={"layout-content-wrapper"}>
          <AppBar toggleNavVisibility={toggleNavVisibility} {...props} />
          <ContentWrapper
            className={"layout-page-content"}
            sx={{
              ...(contentWidth === "boxed" && {
                mx: "auto",
                "@media (min-width:1440px)": { maxWidth: 1440 },
                "@media (min-width:1200px)": { maxWidth: "100%" },
              }),
            }}>
            {children}
          </ContentWrapper>

          {/* Footer Component */}
          <Footer {...props} />

          {/* Portal for React Datepicker */}
          <DatePickerWrapper sx={{ zIndex: 11 }}>
            <Box id={"react-datepicker-portal"} />
          </DatePickerWrapper>
        </MainContentWrapper>
      </VerticalLayoutWrapper>
    </>
  );
};
export default VerticalLayout;
