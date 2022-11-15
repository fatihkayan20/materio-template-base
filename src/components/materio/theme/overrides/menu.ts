import { Theme } from "@mui/material";
import { Skin } from "../../layouts/types";

type ReturnType = {
  MuiMenu: {
    styleOverrides: {
      root: {
        "& .MuiMenu-paper": {
          borderRadius: number;
          boxShadow: string;
          border?: string;
        };
      };
    };
  };
};

const Menu = (theme: Theme, skin: Skin): ReturnType => {
  const boxShadow = (): string => {
    if (skin === "bordered") {
      return theme.shadows[0];
    } else if (theme.palette.mode === "light") {
      return theme.shadows[8];
    } else {
      return theme.shadows[9];
    }
  };

  return {
    MuiMenu: {
      styleOverrides: {
        root: {
          "& .MuiMenu-paper": {
            borderRadius: 5,
            boxShadow: boxShadow(),
            ...(skin === "bordered" && {
              border: `1px solid ${theme.palette.divider}`,
            }),
          },
        },
      },
    },
  };
};

export default Menu;
