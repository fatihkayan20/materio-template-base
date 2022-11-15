import { Theme } from "@mui/material";

type ReturnType = {
  MuiRating: {
    styleOverrides: {
      root: {
        color: string;
      };
    };
  };
};

const Rating = (theme: Theme): ReturnType => {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.warning.main,
        },
      },
    },
  };
};

export default Rating;
