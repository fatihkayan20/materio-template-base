import { Theme } from "@mui/material";
import { Skin } from "../../layouts/types";

type ReturnType = {
  MuiPopover: {
    styleOverrides: {
      root: {
        "& .MuiPopover-paper": {
          border?: string | undefined;
          boxShadow: string;
        };
      };
    };
  };
};

const Popover = (theme: Theme, skin: Skin): ReturnType => {
  return {
    MuiPopover: {
      styleOverrides: {
        root: {
          "& .MuiPopover-paper": {
            boxShadow: theme.shadows[skin === "bordered" ? 0 : 6],
            ...(skin === "bordered" && {
              border: `1px solid ${theme.palette.divider}`,
            }),
          },
        },
      },
    },
  };
};

export default Popover;
