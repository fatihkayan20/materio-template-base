import { Theme } from "@mui/material";

type ReturnType = {
  MuiDivider: {
    styleOverrides: {
      root: {
        margin: string;
      };
    };
  };
};

const Divider = (theme: Theme): ReturnType => {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: `${theme.spacing(2)} 0`,
        },
      },
    },
  };
};

export default Divider;
