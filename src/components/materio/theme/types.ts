// Overrides MUI Styles
// eslint-disable-next-line import/no-unused-modules
declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      dark: string;
      main: string;
      light: string;
      bodyBg: string;
      darkBg: string;
      lightBg: string;
      tableHeaderBg: string;
      primaryGradient: string;
      headerGradient: string;
      border: string;
      placeholder: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      dark?: string;
      main?: string;
      light?: string;
      bodyBg?: string;
      darkBg?: string;
      lightBg?: string;
      tableHeaderBg?: string;
      primaryGradient?: string;
      headerGradient?: string;
      border?: string;
      placeholder?: string;
    };
  }
}

export {};
