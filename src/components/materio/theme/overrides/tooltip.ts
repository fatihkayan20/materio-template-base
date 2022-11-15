import { Theme } from "@mui/material";
import { hexToRGBA } from "../../utils/hex-to-rgba";

type ReturnType = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: string;
      };
      arrow: {
        color: string;
      };
    };
  };
};

const Tooltip = (theme: Theme): ReturnType => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor:
            theme.palette.mode === "light"
              ? hexToRGBA(theme.palette.grey[900], 0.9)
              : hexToRGBA(theme.palette.grey[700], 0.9),
        },
        arrow: {
          color:
            theme.palette.mode === "light"
              ? hexToRGBA(theme.palette.grey[900], 0.9)
              : hexToRGBA(theme.palette.grey[700], 0.9),
        },
      },
    },
  };
};

export default Tooltip;
