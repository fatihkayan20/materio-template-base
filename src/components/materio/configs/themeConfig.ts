/**
 * Config
 * -------------------------------------------------------------------------------------
 * ! IMPORTANT: Make sure you clear the browser local storage in order to see the config changes in the template.
 * ! To clear local storage, you may refer https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/.
 */
import { Direction, PaletteMode } from "@mui/material";
import CircleOutline from "mdi-material-ui/CircleOutline";
// eslint-disable-next-line import/no-cycle
import {
  AppBar,
  ContentWidth,
  Footer,
  HorizontalMenuToggle,
  Skin,
  VerticalNavToggle,
} from "../layouts/types";

type ThemeConfig = {
  readonly skin: Skin;
  readonly appBar: AppBar;
  readonly footer: Footer;
  readonly mode: PaletteMode;
  readonly navHidden: boolean;
  readonly appBarBlur: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly navSubItemIcon: any;
  readonly direction: Direction;
  readonly templateName: string;
  readonly navCollapsed: boolean;
  readonly routingLoader: boolean;
  readonly disableRipple: boolean;
  readonly navigationSize: number;
  readonly menuTextTruncate: boolean;
  readonly contentWidth: ContentWidth;
  readonly responsiveFontSizes: boolean;
  readonly collapsedNavigationSize: number;
  readonly horizontalMenuAnimation: boolean;
  readonly layout: "vertical" | "horizontal";
  readonly verticalNavToggleType: VerticalNavToggle;
  readonly horizontalMenuToggle: HorizontalMenuToggle;
  readonly afterVerticalNavMenuContentPosition: "fixed" | "static";
  readonly beforeVerticalNavMenuContentPosition: "fixed" | "static";
  readonly toastPosition:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
};
const themeConfig: ThemeConfig = {
  // ** Layout Configs
  templateName: "Materio" /* App Name */,
  layout: "vertical" /* vertical | horizontal */,
  mode: "light" /* light | dark */,
  direction: "ltr" /* ltr | rtl */,
  skin: "default" /* default | bordered | semi-dark /*! Note: semi-dark value will only work for Vertical Layout */,
  contentWidth: "boxed" /* full | boxed */,
  footer: "static" /* fixed | static | hidden */,
  // ** Routing Configs
  routingLoader: true /* true | false */,
  // ** Navigation (Menu) Configs
  navHidden: false /* true | false */,
  menuTextTruncate: true /* true | false */,
  navSubItemIcon: CircleOutline /* Icon Element */,
  verticalNavToggleType:
    "accordion" /* accordion | collapse /*! Note: This is for Vertical navigation menu only */,
  navCollapsed:
    false /* true | false /*! Note: This is for Vertical navigation menu only */,
  navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
  collapsedNavigationSize: 68 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
  afterVerticalNavMenuContentPosition: "fixed" /* fixed | static */,
  beforeVerticalNavMenuContentPosition: "fixed" /* fixed | static */,
  horizontalMenuToggle:
    "hover" /* click | hover /*! Note: This is for Horizontal navigation menu only */,
  horizontalMenuAnimation: true /* true | false */,
  // ** AppBar Configs
  appBar:
    "hidden" /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */,
  appBarBlur: true /* true | false */,
  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: false /* true | false */,
  toastPosition:
    "top-right" /* top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */,
};
export default themeConfig;
