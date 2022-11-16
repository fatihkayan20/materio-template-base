import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import themeConfig from "../../../../configs/themeConfig";
import { Settings } from "../../../../context/settingsContext";
import { NavGroup } from "../../../types";
import { hasActiveChild, removeChildren } from "../../../utils";
import Translations from "../../Translations";
import UserIcon from "../../UserIcon";
import { conditionalBgColor } from "./conditionalBgColor";
import {
  MenuGroupToggleLeftIcon,
  MenuGroupToggleRightIcon,
  MenuItemTextWrapper,
} from "./VerticalNavGroup.styled";
// eslint-disable-next-line import/no-cycle
import VerticalNavItems from "./VerticalNavItems";

interface Props {
  readonly item: NavGroup;
  readonly navHover: boolean;
  readonly parent?: NavGroup;
  readonly settings: Settings;
  readonly navVisible?: boolean;
  readonly groupActive: string[];
  readonly collapsedNavWidth: number;
  readonly currentActiveGroup: string[];
  readonly navigationBorderWidth: number;
  readonly isSubToSub?: NavGroup | undefined;
  readonly saveSettings: (values: Settings) => void;
  readonly setGroupActive: (values: string[]) => void;
  readonly setCurrentActiveGroup: (items: string[]) => void;
}

const VerticalNavGroup = (props: Props): React.ReactNode => {
  const {
    item,
    parent,
    settings,
    navHover,
    navVisible,
    isSubToSub,
    groupActive,
    setGroupActive,
    collapsedNavWidth,
    currentActiveGroup,
    setCurrentActiveGroup,
    navigationBorderWidth,
  } = props;
  const theme = useTheme();
  const router = useRouter();
  const currentURL = router.pathname;
  const { skin, direction, navCollapsed, verticalNavToggleType } = settings;
  const toggleActiveGroup = (): void => {
    let openGroup = groupActive;
    if (openGroup.includes(item.title)) {
      openGroup.splice(openGroup.indexOf(item.title), 1);
      if (item.children) {
        removeChildren(item.children, openGroup, currentActiveGroup);
      }
    } else if (parent) {
      if (parent.children) {
        removeChildren(parent.children, openGroup, currentActiveGroup);
      }
      if (!openGroup.includes(item.title)) {
        openGroup.push(item.title);
      }
    } else {
      openGroup = [];
      if (currentActiveGroup.every((elem) => groupActive.includes(elem))) {
        openGroup.push(...currentActiveGroup);
      }
      if (!openGroup.includes(item.title)) {
        openGroup.push(item.title);
      }
    }
    setGroupActive([...openGroup]);
  };
  const handleGroupClick = (): void => {
    const openGroup = groupActive;
    if (verticalNavToggleType === "collapse") {
      if (openGroup.includes(item.title)) {
        openGroup.splice(openGroup.indexOf(item.title), 1);
      } else {
        openGroup.push(item.title);
      }
      setGroupActive([...openGroup]);
    } else {
      toggleActiveGroup();
    }
  };
  useEffect(() => {
    if (hasActiveChild(item, currentURL)) {
      if (!groupActive.includes(item.title)) {
        groupActive.push(item.title);
      }
    } else {
      const index = groupActive.indexOf(item.title);
      if (index > -1) {
        groupActive.splice(index, 1);
      }
    }
    setGroupActive([...groupActive]);
    setCurrentActiveGroup([...groupActive]);
    if (navCollapsed && !navHover) {
      setGroupActive([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentURL, item, navCollapsed, navHover]);
  useEffect(() => {
    if (navCollapsed && !navHover) {
      setGroupActive([]);
    }
    if (
      (navCollapsed && navHover) ||
      (groupActive.length === 0 && !navCollapsed)
    ) {
      setGroupActive([...currentActiveGroup]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navCollapsed, navHover]);
  useEffect(() => {
    if (groupActive.length === 0 && !navCollapsed) {
      setGroupActive([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navCollapsed, navHover]);
  const IconTag = parent && !item.icon ? themeConfig.navSubItemIcon : item.icon;
  const menuGroupCollapsedStyles =
    navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 };
  const conditionalColor = (): {
    color: string;
  } => {
    if (skin === "semi-dark" && theme.palette.mode === "light") {
      return {
        color: `rgba(${theme.palette.customColors.dark}, 0.68) !important`,
      };
    } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
      return {
        color: `rgba(${theme.palette.customColors.light}, 0.68) !important`,
      };
    } else {
      return {
        color: `${theme.palette.text.secondary} !important`,
      };
    }
  };

  return (
    <Fragment>
      <ListItem
        disablePadding
        className={"nav-group"}
        onClick={handleGroupClick}
        sx={{ mt: 1.5, px: "0 !important", flexDirection: "column" }}>
        <ListItemButton
          className={clsx({
            "Mui-selected":
              groupActive.includes(item.title) ||
              currentActiveGroup.includes(item.title),
          })}
          sx={{
            py: 2.25,
            width: "100%",
            ...conditionalBgColor(theme, skin),
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
            transition: "padding-left .25s ease-in-out",
            pl:
              navCollapsed && !navHover
                ? (collapsedNavWidth - navigationBorderWidth - 24) / 8
                : 5.5,
            pr:
              navCollapsed && !navHover
                ? ((collapsedNavWidth - navigationBorderWidth - 24) / 2 - 5) / 4
                : 3.5,
          }}>
          {isSubToSub ? null : (
            <ListItemIcon
              sx={{
                color: "primary.main",
                transition: "margin .25s ease-in-out",
                ...(parent && navCollapsed && !navHover ? {} : { mr: 2.5 }),
                ...(navCollapsed && !navHover ? { mr: 0 } : {}), // this condition should come after (parent && navCollapsed && !navHover) condition for proper styling
                ...(parent && item.children ? { ml: 1.25, mr: 3.75 } : {}),
              }}>
              <UserIcon
                icon={IconTag}
                componentType={"vertical-menu"}
                iconProps={{
                  sx: { ...(parent ? { fontSize: "0.875rem" } : {}) },
                }}
              />
            </ListItemIcon>
          )}
          <MenuItemTextWrapper
            sx={{
              ...menuGroupCollapsedStyles,
              ...(isSubToSub ? { ml: 9 } : {}),
            }}>
            <Typography
              {...((themeConfig.menuTextTruncate ||
                (!themeConfig.menuTextTruncate &&
                  navCollapsed &&
                  !navHover)) && {
                noWrap: true,
              })}>
              <Translations text={item.title} />
            </Typography>
            <Box
              className={"menu-item-meta"}
              sx={{ ml: 0.8, display: "flex", alignItems: "center" }}>
              {item.badgeContent ? (
                <Chip
                  label={item.badgeContent}
                  color={item.badgeColor || "primary"}
                  sx={{
                    mr: 0.8,
                    height: 20,
                    fontWeight: 500,
                    "& .MuiChip-label": {
                      px: 1.5,
                      textTransform: "capitalize",
                    },
                  }}
                />
              ) : null}
              {direction === "ltr" ? (
                <MenuGroupToggleRightIcon
                  sx={{
                    ...conditionalColor(),
                    ...(groupActive.includes(item.title)
                      ? { transform: "rotate(90deg)" }
                      : {}),
                  }}
                />
              ) : (
                <MenuGroupToggleLeftIcon
                  sx={{
                    ...conditionalColor(),
                    ...(groupActive.includes(item.title)
                      ? { transform: "rotate(-90deg)" }
                      : {}),
                  }}
                />
              )}
            </Box>
          </MenuItemTextWrapper>
        </ListItemButton>
        <Collapse
          component={"ul"}
          onClick={(e): void => e.stopPropagation()}
          in={groupActive.includes(item.title)}
          sx={{
            pl: 0,
            width: "100%",
            ...menuGroupCollapsedStyles,
            transition: "all .25s ease-in-out",
          }}>
          <VerticalNavItems
            {...props}
            parent={item}
            navVisible={navVisible}
            verticalNavItems={item.children}
            isSubToSub={parent && item.children ? item : undefined}
          />
        </Collapse>
      </ListItem>
    </Fragment>
  );
};
export default VerticalNavGroup;
