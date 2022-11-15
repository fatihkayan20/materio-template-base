import { Theme } from "@mui/material";
import { hexToRGBA } from "../../utils/hex-to-rgba";

type ReturnType = {
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        "&.Mui-selected:not(.Mui-disabled):not(.MuiPaginationItem-textPrimary):not(.MuiPaginationItem-textSecondary):hover": {
          backgroundColor: string;
        };
      };
      outlined: {
        borderColor: string;
      };
      outlinedPrimary: {
        "&.Mui-selected": {
          backgroundColor: string;
          "&:hover": {
            backgroundColor: string;
          };
        };
      };
      outlinedSecondary: {
        "&.Mui-selected": {
          backgroundColor: string;
          "&:hover": {
            backgroundColor: string;
          };
        };
      };
    };
  };
};

const Pagination = (theme: Theme): ReturnType => {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected:not(.Mui-disabled):not(.MuiPaginationItem-textPrimary):not(.MuiPaginationItem-textSecondary):hover":
            {
              backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`,
            },
        },
        outlined: {
          borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`,
        },
        outlinedPrimary: {
          "&.Mui-selected": {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.12),
            "&:hover": {
              backgroundColor: `${hexToRGBA(
                theme.palette.primary.main,
                0.2,
              )} !important`,
            },
          },
        },
        outlinedSecondary: {
          "&.Mui-selected": {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.12),
            "&:hover": {
              backgroundColor: `${hexToRGBA(
                theme.palette.secondary.main,
                0.2,
              )} !important`,
            },
          },
        },
      },
    },
  };
};

export default Pagination;
