import { Theme } from "@mui/material";
import { hexToRGBA } from "../../utils/hex-to-rgba";

type ReturnType = {
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: string;
      };
      invisible: {
        backgroundColor: string;
      };
    };
  };
};

const Backdrop = (theme: Theme): ReturnType => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor:
            theme.palette.mode === "light"
              ? `rgba(${theme.palette.customColors.main}, 0.7)`
              : hexToRGBA(theme.palette.background.default, 0.7),
        },
        invisible: {
          backgroundColor: "transparent",
        },
      },
    },
  };
};
export default Backdrop;
