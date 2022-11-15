import { ThemeOptions } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { Settings } from "../context/settingsContext";
import breakpoints from "./breakpoints";
import palette from "./palette";
import shadows from "./shadows";
import spacing from "./spacing";

const themeOptions = (settings: Settings): ThemeOptions => {
  const { skin, mode, direction, themeColor } = settings;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userThemeConfig: any = Object.assign({});
  const userFontFamily = userThemeConfig.typography?.fontFamily;
  delete userThemeConfig.components;
  delete userThemeConfig.typography;
  const mergedThemeConfig = deepmerge(
    {
      direction,
      palette: palette(mode, skin, themeColor),
      typography: {
        fontFamily:
          userFontFamily ||
          [
            "Inter",
            "sans-serif",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
      },
      shadows: shadows(mode),
      ...spacing,
      breakpoints: breakpoints(),
      shape: {
        borderRadius: 6,
      },
      mixins: {
        toolbar: {
          minHeight: 64,
        },
      },
    },
    userThemeConfig,
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return deepmerge(mergedThemeConfig, {
    palette: {
      primary: {
        ...mergedThemeConfig.palette[themeColor],
      },
    },
  });
};
export default themeOptions;
