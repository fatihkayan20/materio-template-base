import { Theme } from "@mui/material";
import { Skin } from "../../layouts/types";

type ReturnType = {
  MuiAutocomplete: {
    styleOverrides: {
      paper: {
        boxShadow?: string | undefined;
        border?: string | undefined;
      };
    };
  };
};

const Autocomplete = (theme: Theme, skin: Skin): ReturnType => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          ...(skin === "bordered" && {
            boxShadow: "none",
            border: `1px solid ${theme.palette.divider}`,
          }),
        },
      },
    },
  };
};

export default Autocomplete;
