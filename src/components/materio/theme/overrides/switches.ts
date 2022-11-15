import { Theme } from "@mui/material";

type ReturnType = {
  MuiSwitch: {
    styleOverrides: {
      root: {
        "& .MuiSwitch-track": {
          backgroundColor: string;
        };
      };
    };
  };
};

const Switch = (theme: Theme): ReturnType => {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          "& .MuiSwitch-track": {
            backgroundColor: `rgb(${theme.palette.customColors.main})`,
          },
        },
      },
    },
  };
};

export default Switch;
