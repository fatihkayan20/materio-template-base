import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material";
import MuiToolbar, { ToolbarProps } from "@mui/material/Toolbar";
import themeConfig from "../configs/themeConfig";
import { LayoutProps } from "./types";
import Footer from "./components/shared-components/footer";
import Navigation from "./components/horizontal/navigation";
import AppBarContent from "./components/horizontal/app-bar-content";
import { hexToRGBA } from "../utils/hex-to-rgba";
import DatePickerWrapper from "../styles/libs/react-datepicker";
import React from "react";

const HorizontalLayoutWrapper = styled("div")({
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  ...(themeConfig.horizontalMenuAnimation && { overflow: "clip" }),
});
const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: "100%",
  padding: `${theme.spacing(0, 6)} !important`,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4),
  },
  [theme.breakpoints.down("xs")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
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
const HorizontalLayout = (props: LayoutProps): JSX.Element => {
  const {
    hidden,
    children,
    settings,
    saveSettings,
    horizontalNavMenuContent: userHorizontalNavMenuContent,
  } = props;
  const { skin, appBar, navHidden, appBarBlur, contentWidth } = settings;
  return (
    <HorizontalLayoutWrapper className={"layout-wrapper"}>
      {/* Navbar (or AppBar) and Navigation Menu Wrapper */}
      <AppBar
        color={"default"}
        elevation={skin === "bordered" ? 0 : 3}
        className={"layout-navbar-and-nav-container"}
        position={appBar === "fixed" ? "sticky" : "static"}
        sx={{
          alignItems: "center",
          color: "text.primary",
          justifyContent: "center",
          ...(appBar === "static" && { zIndex: 13 }),
          backgroundColor: (theme) => theme.palette.background.paper,
          ...(skin === "bordered" && {
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          }),
          transition:
            "border-bottom 0.2s ease-in-out, backdrop-filter .25s ease-in-out, box-shadow .25s ease-in-out",
          ...(appBar === "fixed"
            ? appBarBlur && {
                backdropFilter: "blur(8px)",
                backgroundColor: (theme) =>
                  hexToRGBA(theme.palette.background.paper, 0.85),
              }
            : {}),
        }}>
        {/* Navbar / AppBar */}
        <Box
          className={"layout-navbar"}
          sx={{
            width: "100%",
            ...(navHidden
              ? {}
              : {
                  borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                }),
          }}>
          <Toolbar
            className={"navbar-content-container"}
            sx={{
              mx: "auto",
              ...(contentWidth === "boxed" && {
                "@media (min-width:1440px)": { maxWidth: 1440 },
              }),
              minHeight: (theme) =>
                `${
                  (theme.mixins.toolbar.minHeight as number) - 1
                }px !important`,
            }}>
            <AppBarContent
              {...props}
              hidden={hidden}
              settings={settings}
              saveSettings={saveSettings}
            />
          </Toolbar>
        </Box>

        {/* Navigation Menu */}
        {navHidden ? null : (
          <Box className={"layout-horizontal-nav"} sx={{ width: "100%" }}>
            <Toolbar
              className={"horizontal-nav-content-container"}
              sx={{
                mx: "auto",
                ...(contentWidth === "boxed" && {
                  "@media (min-width:1440px)": { maxWidth: 1440 },
                }),
                minHeight: (theme) =>
                  `${
                    (theme.mixins.toolbar.minHeight as number) -
                    (skin === "bordered" ? 1 : 0)
                  }px !important`,
              }}>
              {userHorizontalNavMenuContent ? (
                userHorizontalNavMenuContent(props)
              ) : (
                <Navigation {...props} />
              )}
            </Toolbar>
          </Box>
        )}
      </AppBar>

      {/* Content */}
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

      {/* Footer */}
      <Footer {...props} />

      {/* Portal for React Datepicker */}
      <DatePickerWrapper sx={{ zIndex: 11 }}>
        <Box id={"react-datepicker-portal"} />
      </DatePickerWrapper>
    </HorizontalLayoutWrapper>
  );
};
export default HorizontalLayout;
