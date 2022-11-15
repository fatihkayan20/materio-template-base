import { Theme } from "@mui/material";
import { Skin } from "../../layouts/types";

type ReturnType = {
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        backgroundColor: string;
        boxShadow?: string | undefined;
      };
    };
  };
};

const Snackbar = (theme: Theme, skin: Skin): ReturnType => {
  return {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          ...(skin === "bordered" && { boxShadow: "none" }),
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.grey[900]
              : theme.palette.grey[100],
        },
      },
    },
  };
};

export default Snackbar;
