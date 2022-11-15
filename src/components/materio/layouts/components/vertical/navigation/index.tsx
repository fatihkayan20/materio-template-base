/* eslint-disable @typescript-eslint/ban-ts-comment */
import { styled, useTheme } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import List from "@mui/material/List";
import { PropsWithChildren, ReactNode, useRef, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import themeConfig from "../../../../configs/themeConfig";
import { Settings } from "../../../../context/settingsContext";
import { hexToRGBA } from "../../../../utils/hex-to-rgba";
import { VerticalNavItemsType } from "../../../types";
import Drawer from "./Drawer";
import VerticalNavHeader from "./VerticalNavHeader";
import VerticalNavItems from "./VerticalNavItems";

interface Props extends PropsWithChildren {
  readonly hidden: boolean;
  readonly navWidth: number;
  readonly navHover: boolean;
  readonly settings: Settings;
  readonly navVisible: boolean;
  readonly collapsedNavWidth: number;
  readonly navigationBorderWidth: number;
  readonly toggleNavVisibility: () => void;
  readonly setNavHover: (values: boolean) => void;
  readonly setNavVisible: (value: boolean) => void;
  readonly verticalNavItems?: VerticalNavItemsType;
  readonly saveSettings: (values: Settings) => void;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  readonly verticalNavMenuContent?: (props?: any) => ReactNode;
  readonly afterVerticalNavMenuContent?: (props?: any) => ReactNode;
  readonly beforeVerticalNavMenuContent?: (props?: any) => ReactNode;
}

const StyledBoxForShadow = styled(Box)<BoxProps>(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  display: "none",
  position: "absolute",
  pointerEvents: "none",
  width: "calc(100% + 15px)",
  height: theme.mixins.toolbar.minHeight,
  "&.d-block": {
    display: "block",
  },
}));
const Navigation = (props: Props): React.ReactElement => {
  const {
    hidden,
    navHover,
    settings,
    afterVerticalNavMenuContent,
    beforeVerticalNavMenuContent,
    verticalNavMenuContent: userVerticalNavMenuContent,
  } = props;
  const [groupActive, setGroupActive] = useState<string[]>([]);
  const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([]);
  const shadowRef = useRef(null);
  const theme = useTheme();
  const { skin, navCollapsed } = settings;
  const {
    afterVerticalNavMenuContentPosition,
    beforeVerticalNavMenuContentPosition,
  } = themeConfig;
  // ** Fixes Navigation InfiniteScroll
  const handleInfiniteScroll = (ref: HTMLElement): void => {
    if (ref) {
      // @ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect;
      ref.getBoundingClientRect = (): DOMRect => {
        // @ts-ignore
        const original = ref._getBoundingClientRect();
        return { ...original, height: Math.floor(original.height) };
      };
    }
  };
  // ** Scroll Menu
  const scrollMenu = (container: any): void => {
    if (
      beforeVerticalNavMenuContentPosition === "static" ||
      !beforeVerticalNavMenuContent
    ) {
      container = hidden ? container.target : container;
      if (shadowRef && container.scrollTop > 0) {
        // @ts-ignore
        if (!shadowRef.current.classList.contains("d-block")) {
          // @ts-ignore
          shadowRef.current.classList.add("d-block");
        }
      } else {
        // @ts-ignore
        shadowRef.current.classList.remove("d-block");
      }
    }
  };
  const shadowBgColor = (): string => {
    if (skin === "semi-dark" && theme.palette.mode === "light") {
      return `linear-gradient(${
        theme.palette.customColors.darkBg
      } 5%,${hexToRGBA(
        theme.palette.customColors.darkBg,
        0.85,
      )} 30%,${hexToRGBA(
        theme.palette.customColors.darkBg,
        0.5,
      )} 65%,${hexToRGBA(
        theme.palette.customColors.darkBg,
        0.3,
      )} 75%,transparent)`;
    } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
      return `linear-gradient(${
        theme.palette.customColors.lightBg
      } 5%,${hexToRGBA(
        theme.palette.customColors.lightBg,
        0.85,
      )} 30%,${hexToRGBA(
        theme.palette.customColors.lightBg,
        0.5,
      )} 65%,${hexToRGBA(
        theme.palette.customColors.lightBg,
        0.3,
      )} 75%,transparent)`;
    } else {
      return `linear-gradient(${
        theme.palette.background.default
      } 5%,${hexToRGBA(theme.palette.background.default, 0.85)} 30%,${hexToRGBA(
        theme.palette.background.default,
        0.5,
      )} 65%,${hexToRGBA(
        theme.palette.background.default,
        0.3,
      )} 75%,transparent)`;
    }
  };
  const ScrollWrapper = hidden ? Box : PerfectScrollbar;

  return (
    <>
      {/* @ts-ignore */}
      <Drawer {...props}>
        {/* @ts-ignore */}
        <VerticalNavHeader {...props} />
        {beforeVerticalNavMenuContent &&
        beforeVerticalNavMenuContentPosition === "fixed"
          ? beforeVerticalNavMenuContent(props)
          : null}
        {(beforeVerticalNavMenuContentPosition === "static" ||
          !beforeVerticalNavMenuContent) && (
          <StyledBoxForShadow
            ref={shadowRef}
            sx={{ background: shadowBgColor() }}
          />
        )}
        <Box sx={{ position: "relative", overflow: "hidden", height: "100%" }}>
          {/* @ts-ignore */}
          <ScrollWrapper
            containerRef={(ref: HTMLElement): void => handleInfiniteScroll(ref)}
            {...(hidden
              ? {
                  // @ts-ignore
                  onScroll: (container) => scrollMenu(container),
                  sx: {
                    height: "100%",
                    overflowY: "auto",
                    overflowX: "hidden",
                  },
                }
              : {
                  options: { wheelPropagation: false },
                  // @ts-ignore
                  onScrollY: (container) => scrollMenu(container),
                })}>
            {beforeVerticalNavMenuContent &&
            beforeVerticalNavMenuContentPosition === "static"
              ? beforeVerticalNavMenuContent(props)
              : null}
            {userVerticalNavMenuContent ? (
              userVerticalNavMenuContent(props)
            ) : (
              <List
                className={"nav-items"}
                sx={{
                  pt: 0,
                  transition: "padding .25s ease",
                  "& > :first-of-type": { mt: "0" },
                  pr: !navCollapsed || (navCollapsed && navHover) ? 4.5 : 1.25,
                  height: "100%",
                }}>
                <VerticalNavItems
                  groupActive={groupActive}
                  setGroupActive={setGroupActive}
                  currentActiveGroup={currentActiveGroup}
                  setCurrentActiveGroup={setCurrentActiveGroup}
                  {...props}
                />
              </List>
            )}
            {afterVerticalNavMenuContent &&
            afterVerticalNavMenuContentPosition === "static"
              ? afterVerticalNavMenuContent(props)
              : null}
          </ScrollWrapper>
        </Box>
        {afterVerticalNavMenuContent &&
        afterVerticalNavMenuContentPosition === "fixed"
          ? afterVerticalNavMenuContent(props)
          : null}
      </Drawer>
    </>
  );
};
export default Navigation;
