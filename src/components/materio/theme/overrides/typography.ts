import { Theme } from "@mui/material";

type ReturnType = {
  MuiTypography: {
    styleOverrides: {
      gutterBottom: {
        marginBottom: string;
      };
    };
  };
};

const Typography = (theme: Theme): ReturnType => {
  return {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: theme.spacing(2),
        },
      },
    },
  };
};

export default Typography;
