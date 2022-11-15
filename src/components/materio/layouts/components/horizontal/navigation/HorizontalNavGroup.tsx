/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Fade from "@mui/material/Fade";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import ChevronDown from "mdi-material-ui/ChevronDown";
import ChevronLeft from "mdi-material-ui/ChevronLeft";
import ChevronRight from "mdi-material-ui/ChevronRight";
import { useRouter } from "next/router";
import { Fragment, SyntheticEvent, useEffect, useState } from "react";
import { usePopper } from "react-popper";
import themeConfig from "../../../../configs/themeConfig";
import { Settings } from "../../../../context/settingsContext";
import { NavGroup } from "../../../types";
import { hasActiveChild } from "../../../utils";
import Translations from "../../Translations";
import UserIcon from "../../UserIcon";
import { ListItem, NavigationMenu } from "./HorizontalNavGroup.styled";
// eslint-disable-next-line import/no-cycle
import HorizontalNavItems from "./HorizontalNavItems";

interface Props {
  readonly item: NavGroup;
  readonly settings: Settings;
  readonly hasParent?: boolean;
}

const HorizontalNavGroup = (props: Props): React.ReactNode => {
  const { item, hasParent, settings } = props;
  const theme = useTheme();
  const router = useRouter();
  const currentURL = router.pathname;
  const { skin, direction } = settings;
  const {
    navSubItemIcon,
    menuTextTruncate,
    horizontalMenuToggle,
    horizontalMenuAnimation,
  } = themeConfig;
  const popperOffsetHorizontal = direction === "rtl" ? 22 : -22;
  const popperPlacement = direction === "rtl" ? "bottom-end" : "bottom-start";
  const popperPlacementSubMenu =
    direction === "rtl" ? "left-start" : "right-start";
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [popperElement, setPopperElement] = useState(null);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [referenceElement, setReferenceElement] = useState(null);
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: hasParent ? popperPlacementSubMenu : popperPlacement,
      modifiers: [
        {
          name: "offset",
          enabled: true,
          options: {
            offset: hasParent ? [-8, 15] : [popperOffsetHorizontal, 5],
          },
        },
        {
          name: "flip",
          enabled: true,
          options: {
            // @ts-ignore
            boundary: window,
            fallbackPlacements: ["auto-start", "right"],
          },
        },
      ],
    },
  );
  const handleGroupOpen = (event: SyntheticEvent): void => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
    update ? update() : null;
  };
  const handleGroupClose = (): void => {
    setAnchorEl(null);
    setMenuOpen(false);
  };
  const handleMenuToggleOnClick = (event: SyntheticEvent): void => {
    if (anchorEl) {
      handleGroupClose();
    } else {
      handleGroupOpen(event);
    }
  };
  useEffect(() => {
    handleGroupClose();
  }, [router.asPath]);
  const IconTag = item.icon ? item.icon : navSubItemIcon;
  const ToggleIcon = direction === "rtl" ? ChevronLeft : ChevronRight;
  const WrapperCondition = horizontalMenuToggle === "click";
  const MainWrapper = WrapperCondition ? ClickAwayListener : "div";
  const ChildWrapper = WrapperCondition ? "div" : Fragment;
  const AnimationWrapper = horizontalMenuAnimation ? Fade : Fragment;
  const childMenuGroupStyles = (): string => {
    if (attributes?.popper) {
      if (direction === "ltr") {
        if (attributes.popper["data-popper-placement"] === "right-start") {
          return "left";
        }
        if (attributes.popper["data-popper-placement"] === "left-start") {
          return "right";
        }
      } else {
        if (attributes.popper["data-popper-placement"] === "right-start") {
          return "right";
        }
        if (attributes.popper["data-popper-placement"] === "left-start") {
          return "left";
        }
      }
    }
    return "";
  };
  return (
    <>
      {/* @ts-ignore */}
      <MainWrapper
        {...(WrapperCondition
          ? { onClickAway: handleGroupClose }
          : { onMouseLeave: handleGroupClose })}>
        <ChildWrapper>
          <List
            component={"div"}
            sx={{ py: skin === "bordered" ? 2.625 : 2.75 }}>
            <ListItem
              aria-haspopup={"true"}
              {...(WrapperCondition ? {} : { onMouseEnter: handleGroupOpen })}
              className={clsx("menu-group", {
                "Mui-selected": hasActiveChild(item, currentURL),
              })}
              {...(horizontalMenuToggle === "click"
                ? { onClick: handleMenuToggleOnClick }
                : {})}
              sx={{
                ...(menuOpen
                  ? { backgroundColor: theme.palette.action.hover }
                  : {}),
                ...(!hasParent
                  ? {
                      px: 5.5,
                      borderRadius: 3.5,
                      "&.Mui-selected": {
                        boxShadow: 3,
                        backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`,
                        "& .MuiTypography-root, & .MuiListItemIcon-root, & .MuiSvgIcon-root":
                          {
                            color: "common.white",
                          },
                      },
                    }
                  : { px: 5 }),
              }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                ref={setReferenceElement}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    ...(menuTextTruncate && { overflow: "hidden" }),
                  }}>
                  <ListItemIcon
                    sx={{ color: "text.primary", mr: !hasParent ? 2 : 3 }}>
                    <UserIcon
                      icon={IconTag}
                      componentType={"horizontal-menu"}
                      iconProps={{
                        sx:
                          IconTag === navSubItemIcon
                            ? { fontSize: "0.875rem" }
                            : { fontSize: "1.375rem" },
                      }}
                    />
                  </ListItemIcon>
                  <Typography {...(menuTextTruncate && { noWrap: true })}>
                    <Translations text={item.title} />
                  </Typography>
                </Box>
                <Box sx={{ ml: 1.6, display: "flex", alignItems: "center" }}>
                  {item.badgeContent ? (
                    <Chip
                      label={item.badgeContent}
                      color={item.badgeColor || "primary"}
                      sx={{
                        mr: 1.6,
                        height: 20,
                        fontWeight: 500,
                        "& .MuiChip-label": {
                          px: 1.5,
                          textTransform: "capitalize",
                        },
                      }}
                    />
                  ) : null}
                  {hasParent ? (
                    <ToggleIcon
                      sx={{ fontSize: "1.375rem", color: "text.primary" }}
                    />
                  ) : (
                    <ChevronDown
                      sx={{ fontSize: "1.375rem", color: "text.primary" }}
                    />
                  )}
                </Box>
              </Box>
            </ListItem>
            <AnimationWrapper
              {...(horizontalMenuAnimation && {
                in: menuOpen,
                timeout: { exit: 300, enter: 400 },
              })}>
              <Box
                style={styles.popper}
                ref={setPopperElement}
                {...attributes.popper}
                sx={{
                  zIndex: theme.zIndex.appBar,
                  ...(!horizontalMenuAnimation && {
                    display: menuOpen ? "block" : "none",
                  }),
                  pl:
                    childMenuGroupStyles() === "left"
                      ? skin === "bordered"
                        ? 2.5
                        : 2.25
                      : 0,
                  pr:
                    childMenuGroupStyles() === "right"
                      ? skin === "bordered"
                        ? 2.5
                        : 2.25
                      : 0,
                  ...(hasParent
                    ? { position: "fixed !important" }
                    : { pt: skin === "bordered" ? 5.5 : 5.75 }),
                }}>
                <NavigationMenu
                  sx={{
                    ...(hasParent
                      ? {
                          overflowY: "auto",
                          overflowX: "visible",
                          maxHeight: "calc(100vh - 21rem)",
                        }
                      : {}),
                    ...(skin === "bordered"
                      ? {
                          boxShadow: theme.shadows[0],
                          border: `1px solid ${theme.palette.divider}`,
                        }
                      : { boxShadow: theme.shadows[4] }),
                  }}>
                  <HorizontalNavItems
                    {...props}
                    hasParent
                    horizontalNavItems={item.children}
                  />
                </NavigationMenu>
              </Box>
            </AnimationWrapper>
          </List>
        </ChildWrapper>
      </MainWrapper>
    </>
  );
};
export default HorizontalNavGroup;
