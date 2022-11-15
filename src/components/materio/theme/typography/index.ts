import { Theme } from "@mui/material";

type SubProp = {
  readonly fontWeight?: number;
  readonly letterSpacing: string | number;
  readonly lineHeight?: number;
  readonly color: string;
};

type ReturnType = {
  readonly h1: SubProp;
  readonly h2: SubProp;
  readonly h3: SubProp;
  readonly h4: SubProp;
  readonly h5: SubProp;
  readonly h6: SubProp;
  readonly subtitle1: SubProp;
  readonly subtitle2: SubProp;
  readonly body1: SubProp;
  readonly body2: SubProp;
  readonly button: SubProp;
  readonly caption: SubProp;
  readonly overline: SubProp;
};

const Typography = (theme: Theme): ReturnType => {
  return {
    h1: {
      fontWeight: 500,
      letterSpacing: "-1.5px",
      color: theme.palette.text.primary,
    },
    h2: {
      fontWeight: 500,
      letterSpacing: "-0.5px",
      color: theme.palette.text.primary,
    },
    h3: {
      fontWeight: 500,
      letterSpacing: 0,
      color: theme.palette.text.primary,
    },
    h4: {
      fontWeight: 500,
      letterSpacing: "0.25px",
      color: theme.palette.text.primary,
    },
    h5: {
      fontWeight: 500,
      letterSpacing: 0,
      color: theme.palette.text.primary,
    },
    h6: {
      letterSpacing: "0.15px",
      color: theme.palette.text.primary,
    },
    subtitle1: {
      letterSpacing: "0.15px",
      color: theme.palette.text.primary,
    },
    subtitle2: {
      letterSpacing: "0.1px",
      color: theme.palette.text.secondary,
    },
    body1: {
      letterSpacing: "0.15px",
      color: theme.palette.text.primary,
    },
    body2: {
      lineHeight: 1.5,
      letterSpacing: "0.15px",
      color: theme.palette.text.secondary,
    },
    button: {
      letterSpacing: "0.3px",
      color: theme.palette.text.primary,
    },
    caption: {
      letterSpacing: "0.4px",
      color: theme.palette.text.secondary,
    },
    overline: {
      letterSpacing: "1px",
      color: theme.palette.text.secondary,
    },
  };
};

export default Typography;
