/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createTheme,
  responsiveFontSizes,
  Theme,
  ThemeProvider,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ReactNode } from "react";
import themeConfig from "../configs/themeConfig";
import { Settings } from "../context/settingsContext";
import Direction from "../layouts/components/Direction";
import GlobalStyling from "./globalStyles";
import overrides from "./overrides";
import themeOptions from "./ThemeOptions";
import typography from "./typography";

interface Props {
  readonly settings: Settings;
  readonly children: ReactNode;
}

const ThemeComponent = (props: Props): React.ReactElement => {
  const { settings, children } = props;
  const coreThemeConfig = themeOptions(settings);
  let theme = createTheme(coreThemeConfig);
  // ** Deep Merge Component overrides of core and user
  const mergeComponentOverrides = (theme: Theme, settings: Settings): any => ({
    ...overrides(theme, settings),
  });
  // ** Deep Merge Typography of core and user
  const mergeTypography = (theme: Theme): any => typography(theme);
  // ** Continue theme creation and pass merged component overrides to CreateTheme function
  theme = createTheme(theme, {
    components: { ...mergeComponentOverrides(theme, settings) },
    typography: { ...mergeTypography(theme) },
  });
  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }
  return (
    <ThemeProvider theme={theme}>
      <Direction direction={settings.direction}>
        <CssBaseline />
        {/* eslint-disable @typescript-eslint/no-explicit-any */}
        <GlobalStyles
          styles={(): any => GlobalStyling(theme, settings) as any}
        />
        {children}
      </Direction>
    </ThemeProvider>
  );
};
export default ThemeComponent;
