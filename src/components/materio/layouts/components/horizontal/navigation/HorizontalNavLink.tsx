import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import MuiListItem, { ListItemProps } from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ElementType, Fragment } from "react";
import themeConfig from "../../../../configs/themeConfig";
import { Settings } from "../../../../context/settingsContext";
import { hexToRGBA } from "../../../../utils/hex-to-rgba";
import { NavLink } from "../../../types";
import Translations from "../../Translations";
import UserIcon from "../../UserIcon";

interface Props {
  readonly item: NavLink;
  readonly settings: Settings;
  readonly hasParent: boolean;
  readonly mobile?: boolean;
}

const ListItem = styled(MuiListItem)<
  ListItemProps & { component?: ElementType; target?: "_blank" | undefined }
>(({ theme }) => ({
  width: "auto",
  paddingTop: theme.spacing(2.25),
  color: theme.palette.text.primary,
  paddingBottom: theme.spacing(2.25),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "&.active, &.active:hover": {
    backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08),
  },
  "&.active .MuiTypography-root, &.active .MuiListItemIcon-root": {
    color: theme.palette.primary.main,
  },
}));
const HorizontalNavLink = (props: Props): React.ReactNode => {
  const { item, hasParent } = props;
  const router = useRouter();
  const { navSubItemIcon, menuTextTruncate } = themeConfig;
  const IconTag = item.icon ? item.icon : navSubItemIcon;
  const Wrapper = !hasParent ? List : Fragment;
  const handleURLQueries = (): boolean => {
    if (props.mobile) {
      return router.pathname.includes(item.path as string);
    }
    if (Object.keys(router.query).length && item.path) {
      const arr = Object.keys(router.query);
      return (
        router.asPath.includes(item.path) &&
        router.asPath.includes(router.query[arr[0]] as string)
      );
    }
    return false;
  };
  const isNavLinkActive = (): boolean => {
    if (router.pathname === item.path || handleURLQueries()) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Wrapper
      {...(!hasParent
        ? {
            component: "div",
            sx: { py: 2.75 },
          }
        : {})}>
      <Link href={`${item.path}`} passHref>
        <ListItem
          component={"a"}
          disabled={item.disabled}
          className={clsx({ active: isNavLinkActive() })}
          target={item.openInNewTab ? "_blank" : undefined}
          onClick={(e): void => {
            if (item.path === undefined) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          sx={{
            ...(item.disabled
              ? { pointerEvents: "none" }
              : { cursor: "pointer" }),
            ...(!hasParent
              ? {
                  display: "flex",
                  flex: 1,
                  p: 0,
                  borderRadius: 1.5,
                  "& .MuiTypography-root": {
                    fontWeight: "400",
                    fontSize: ".85rem",
                    color: "#777777",
                  },
                  "&.active, &.active:hover": {
                    boxShadow: props.mobile ? 0 : 3,
                    background: (theme) =>
                      props.mobile
                        ? theme.palette.common.white
                        : `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`,
                    "& .MuiTypography-root, & .MuiListItemIcon-root": {
                      color: props.mobile ? "primary.main" : "common.white",
                      fontWeight: "700",
                      fontSize: ".85rem",
                    },
                  },
                }
              : {}),
          }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Box
              sx={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                ...(menuTextTruncate && { overflow: "hidden" }),
              }}>
              <ListItemIcon
                sx={{ color: "text.primary", mr: !hasParent ? 0 : 0 }}>
                <UserIcon
                  icon={IconTag}
                  componentType={"horizontal-menu"}
                  iconProps={{
                    sx:
                      IconTag === navSubItemIcon
                        ? { fontSize: "0.875rem" }
                        : { fontSize: "1.875rem" },
                  }}
                />
              </ListItemIcon>
              <Typography {...(menuTextTruncate && { noWrap: true })}>
                <Translations text={item.title} />
              </Typography>
            </Box>
            {item.badgeContent ? (
              <Chip
                label={item.badgeContent}
                color={item.badgeColor || "primary"}
                sx={{
                  ml: 1.6,
                  height: 20,
                  fontWeight: 500,
                  "& .MuiChip-label": {
                    px: 1.5,
                    textTransform: "capitalize",
                  },
                }}
              />
            ) : null}
          </Box>
        </ListItem>
      </Link>
    </Wrapper>
  );
};
export default HorizontalNavLink;
