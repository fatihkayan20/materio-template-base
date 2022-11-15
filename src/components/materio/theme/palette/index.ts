import { PaletteMode } from "@mui/material";
import { Skin, ThemeColor } from "../../layouts/types";

type ColorTypes = {
  readonly dark: string;
  readonly main: string;
  readonly light: string;
  readonly contrastText: string;
};

type CustomColors = {
  readonly dark: string;
  readonly main: string;
  readonly light: string;
  readonly darkBg: string;
  readonly lightBg: string;
  readonly primaryGradient: string;
  readonly headerGradient: string;
  readonly bodyBg: string;
  readonly tableHeaderBg: string;
  readonly border: string;
  readonly placeholder: string;
};

type ReturnType = {
  readonly customColors: CustomColors;
  readonly common: {
    readonly black: string;
    readonly white: string;
  };
  readonly mode: PaletteMode;
  readonly primary: ColorTypes;
  readonly secondary: ColorTypes;
  readonly error: ColorTypes;
  readonly warning: ColorTypes;
  readonly info: ColorTypes;
  readonly success: ColorTypes;
  readonly text: {
    readonly primary: string;
    readonly secondary: string;
    readonly disabled: string;
  };
  readonly background: {
    readonly default: string;
    readonly paper: string;
  };
  readonly action: {
    readonly active: string;
    readonly hover: string;
    readonly selected: string;
    readonly disabled: string;
    readonly disabledBackground: string;
    readonly focus: string;
  };
  readonly grey: {
    readonly 50: string;
    readonly 100: string;
    readonly 200: string;
    readonly 300: string;
    readonly 400: string;
    readonly 500: string;
    readonly 600: string;
    readonly 700: string;
    readonly 800: string;
    readonly 900: string;
    readonly A100: string;
    readonly A200: string;
    readonly A400: string;
    readonly A700: string;
  };
  readonly divider: string;
};

const DefaultPalette = (
  mode: PaletteMode,
  skin: Skin,
  themeColor: ThemeColor,
): ReturnType => {
  const lightColor = "58, 53, 65";
  const darkColor = "231, 227, 252";
  const mainColor = mode === "light" ? lightColor : darkColor;
  const primaryGradient = (): string => {
    if (themeColor === "primary") {
      return "#6BAFC9";
    } else if (themeColor === "secondary") {
      return "#9C9FA4";
    } else if (themeColor === "success") {
      return "#93DD5C";
    } else if (themeColor === "error") {
      return "#FF8C90";
    } else if (themeColor === "warning") {
      return "#FFCF5C";
    } else {
      return "#6ACDFF";
    }
  };
  const defaultBgColor = (): string => {
    if (skin === "bordered" && mode === "light") {
      return "#FFF";
    } else if (skin === "bordered" && mode === "dark") {
      return "#312D4B";
    } else if (mode === "light") {
      return "#f8f8f9";
    } else {
      return "#28243D";
    }
  };
  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      darkBg: "#fff",
      lightBg: "#f8f8f9",
      primaryGradient: primaryGradient(),
      headerGradient: "linear-gradient(90deg, #388098 24.52%, #ffffff00 100%)",
      bodyBg: mode === "light" ? "#f8f8f9" : "#28243D", // Same as palette.background.default but doesn't consider bordered skin
      tableHeaderBg: mode === "light" ? "#F9FAFC" : "#3D3759",
      border: "#DFDFDF",
      placeholder: "#737373",
    },
    common: {
      black: "#000",
      white: "#FFF",
    },
    mode: mode,
    primary: {
      light: "#6BAFC9",
      main: "#388098",
      dark: "#00536A",
      contrastText: "#FFF",
    },
    secondary: {
      light: "#9C9FA4",
      main: "#8A8D93",
      dark: "#777B82",
      contrastText: "#FFF",
    },
    success: {
      light: "#6AD01F",
      main: "#56CA00",
      dark: "#4CB200",
      contrastText: "#FFF",
    },
    error: {
      light: "#FF6166",
      main: "#FF4C51",
      dark: "#E04347",
      contrastText: "#FFF",
    },
    warning: {
      light: "#FFCA64",
      main: "#FFB400",
      dark: "#E09E00",
      contrastText: "#FFF",
    },
    info: {
      light: "#32BAFF",
      main: "#16B1FF",
      dark: "#139CE0",
      contrastText: "#FFF",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F2F2F2",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#989898",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#D5D5D5",
      A200: "#AAAAAA",
      A400: "#616161",
      A700: "#303030",
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.68)`,
      disabled: `rgba(${mainColor}, 0.38)`,
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === "light" ? "#FFF" : "#312D4B",
      default: defaultBgColor(),
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.3)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`,
    },
  };
};
export default DefaultPalette;
