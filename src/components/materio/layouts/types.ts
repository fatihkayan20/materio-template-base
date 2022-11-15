import { ReactNode } from "react";
// eslint-disable-next-line import/no-cycle
import { Settings } from "../context/settingsContext";

export type Skin = "default" | "bordered" | "semi-dark";
export type ContentWidth = "full" | "boxed";
export type AppBar = "fixed" | "static" | "hidden";
export type Footer = "fixed" | "static" | "hidden";
export type ThemeColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";
export type VerticalNavToggle = "accordion" | "collapse";
export type HorizontalMenuToggle = "hover" | "click";
export type NavLink = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  path?: string;
  title: string;
  action?: string;
  subject?: string;
  disabled?: boolean;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  children?: (NavGroup | NavLink)[];
  badgeColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
  loginType?: LoginType[];
};
export type NavGroup = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  title: string;
  action?: string;
  subject?: string;
  badgeContent?: string;
  children?: (NavGroup | NavLink)[];
  badgeColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
};
export type NavSectionTitle = {
  action?: string;
  subject?: string;
  sectionTitle: string;
};
export type VerticalNavItemsType = (NavLink | NavGroup | NavSectionTitle)[];
export type HorizontalNavItemsType = (NavLink | NavGroup)[];
export type LayoutProps = {
  hidden: boolean;
  settings: Settings;
  children: ReactNode;
  menuLockedIcon?: ReactNode;
  menuUnlockedIcon?: ReactNode;
  verticalNavItems?: VerticalNavItemsType;
  bottomNavItems?: HorizontalNavItemsType;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  scrollToTop?: (props?: any) => ReactNode;
  saveSettings: (values: Settings) => void;
  footerContent?: (props?: any) => ReactNode;
  horizontalNavItems?: HorizontalNavItemsType;
  verticalAppBarContent?: (props?: any) => ReactNode;
  verticalNavMenuContent?: (props?: any) => ReactNode;
  verticalNavMenuBranding?: (props?: any) => ReactNode;
  horizontalAppBarContent?: (props?: any) => ReactNode;
  horizontalAppBarBranding?: (props?: any) => ReactNode;
  horizontalNavMenuContent?: (props?: any) => ReactNode;
  afterVerticalNavMenuContent?: (props?: any) => ReactNode;
  beforeVerticalNavMenuContent?: (props?: any) => ReactNode;
};

export enum LoginType {
  NotLoggedIn = 0,
  NewClient = 1,
  MainUser = 2,
  SubUser = 3,
  All = 4,
}
