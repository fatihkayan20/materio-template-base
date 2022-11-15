import { ReactNode } from "react";
import { styled, SxProps, useTheme } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import MuiToolbar, { ToolbarProps } from "@mui/material/Toolbar";
import { Settings } from "../../../../context/settingsContext";
import { hexToRGBA } from "../../../../utils/hex-to-rgba";

interface Props {
  readonly hidden: boolean;
  readonly settings: Settings;
  readonly toggleNavVisibility: () => void;
  readonly saveSettings: (values: Settings) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly verticalAppBarContent?: (props?: any) => ReactNode;
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: "none",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 6),
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));
const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: "100%",
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  padding: `${theme.spacing(0)} !important`,
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition:
    "padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out",
}));
const LayoutAppBar = (props: Props): JSX.Element | null => {
  // ** Props
  const { settings, verticalAppBarContent: userVerticalAppBarContent } = props;
  // ** Hooks
  const theme = useTheme();
  const scrollTrigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true,
  });
  // ** Vars
  const { skin, appBar, appBarBlur, contentWidth } = settings;
  const appBarFixedStyles = (): SxProps => {
    return {
      px: `${theme.spacing(5)} !important`,
      ...(appBarBlur && { backdropFilter: "blur(8px)" }),
      boxShadow: theme.shadows[skin === "bordered" ? 0 : 3],
      backgroundColor: hexToRGBA(
        theme.palette.background.paper,
        appBarBlur ? 0.85 : 1,
      ),
      ...(skin === "bordered" && {
        border: `1px solid ${theme.palette.divider}`,
        borderTopWidth: 0,
      }),
    };
  };
  if (appBar === "hidden") {
    return null;
  }
  return (
    <AppBar
      elevation={0}
      color={"default"}
      className={"layout-navbar"}
      position={appBar === "fixed" ? "sticky" : "static"}>
      <Toolbar
        className={"navbar-content-container"}
        sx={{
          ...(appBar === "fixed" &&
            scrollTrigger && { ...appBarFixedStyles() }),
          ...(contentWidth === "boxed" && {
            "@media (min-width:1440px)": {
              maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)`,
            },
          }),
        }}>
        {userVerticalAppBarContent ? userVerticalAppBarContent(props) : null}
      </Toolbar>
    </AppBar>
  );
};
export default LayoutAppBar;
