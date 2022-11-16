import React, { ReactNode } from "react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Box, { BoxProps } from "@mui/material/Box";
import { styled, Theme, useMediaQuery } from "@mui/material";
import Close from "mdi-material-ui/Close";
import CircleOutline from "mdi-material-ui/CircleOutline";
import RecordCircleOutline from "mdi-material-ui/RecordCircleOutline";
import { Settings } from "../../../../context/settingsContext";
import Image from "next/image";

interface Props {
  hidden: boolean;
  navHover: boolean;
  settings: Settings;
  collapsedNavWidth: number;
  menuLockedIcon?: ReactNode;
  menuUnlockedIcon?: ReactNode;
  navigationBorderWidth: number;
  toggleNavVisibility: () => void;
  saveSettings: (values: Settings) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  verticalNavMenuBranding?: (props?: any) => ReactNode;
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingRight: theme.spacing(4.5),
  transition: "padding .25s ease-in-out",
  minHeight: theme.mixins.toolbar.minHeight,
}));

const VerticalNavHeader = (props: Props): React.ReactNode => {
  // ** Props
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    menuUnlockedIcon: userMenuUnlockedIcon,
    verticalNavMenuBranding: userVerticalNavMenuBranding,
  } = props;
  // ** Hooks & Vars
  const { navCollapsed } = settings;
  const menuCollapsedStyles =
    navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 };
  const menuHeaderPaddingLeft = (): number => {
    if (navCollapsed && !navHover) {
      if (userVerticalNavMenuBranding) {
        return 0;
      } else {
        return (collapsedNavWidth - navigationBorderWidth - 30) / 8;
      }
    } else {
      return 6;
    }
  };
  const MenuLockedIcon = (): React.ReactNode =>
    userMenuLockedIcon || (
      <RecordCircleOutline
        sx={{
          fontSize: "1.25rem",
          pointerEvents: "none",
          ...menuCollapsedStyles,
          transition: "opacity .25s ease-in-out",
        }}
      />
    );
  const MenuUnlockedIcon = (): React.ReactNode =>
    userMenuUnlockedIcon || (
      <CircleOutline
        sx={{
          fontSize: "1.25rem",
          pointerEvents: "none",
          ...menuCollapsedStyles,
          transition: "opacity .25s ease-in-out",
        }}
      />
    );

  const isCollapseNeeded = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg"),
  );

  React.useEffect(() => {
    saveSettings({ ...settings, navCollapsed: isCollapseNeeded });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCollapseNeeded]);

  return (
    <MenuHeaderWrapper
      className={"nav-header"}
      sx={{ pl: menuHeaderPaddingLeft() }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href={"/"} passHref>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "50px",
              mr: 2,
              mt: -1,
            }}>
            <Image
              src={"/vercel.svg"}
              layout={"fill"}
              alt={"Logo"}
              objectFit={"contain"}
              objectPosition={"left"}
            />
          </Box>
        </Link>
      )}

      {hidden ? (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={toggleNavVisibility}
          sx={{ p: 0, backgroundColor: "transparent !important" }}>
          <Close fontSize={"small"} />
        </IconButton>
      ) : (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={(): void =>
            saveSettings({ ...settings, navCollapsed: !navCollapsed })
          }
          sx={{
            p: 0,
            color: "text.primary",
            backgroundColor: "transparent !important",
          }}>
          {navCollapsed ? MenuUnlockedIcon() : MenuLockedIcon()}
        </IconButton>
      )}
    </MenuHeaderWrapper>
  );
};
export default VerticalNavHeader;
