import { Theme } from "@mui/material";
import { Skin } from "../../../types";

export const conditionalBgColor = (
  theme: Theme,
  skin: Skin,
): {
  color?: string;
  "&:hover"?: {
    backgroundColor: string;
  };
  "&.Mui-selected": {
    backgroundColor: string;
    "&:hover": {
      backgroundColor: string;
    };
  };
} => {
  if (skin === "semi-dark" && theme.palette.mode === "light") {
    return {
      color: `rgba(${theme.palette.customColors.dark}, 0.87)`,
      "&:hover": {
        backgroundColor: `rgba(${theme.palette.customColors.dark}, 0.04)`,
      },
      "&.Mui-selected": {
        backgroundColor: `rgba(${theme.palette.customColors.dark}, 0.08)`,
        "&:hover": {
          backgroundColor: `rgba(${theme.palette.customColors.dark}, 0.12)`,
        },
      },
    };
  } else if (skin === "semi-dark" && theme.palette.mode === "dark") {
    return {
      color: `rgba(${theme.palette.customColors.light}, 0.87)`,
      "&:hover": {
        backgroundColor: `rgba(${theme.palette.customColors.light}, 0.04)`,
      },
      "&.Mui-selected": {
        backgroundColor: `rgba(${theme.palette.customColors.light}, 0.08)`,
        "&:hover": {
          backgroundColor: `rgba(${theme.palette.customColors.light}, 0.12)`,
        },
      },
    };
  } else {
    return {
      "&.Mui-selected": {
        backgroundColor: theme.palette.action.hover,
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      },
    };
  }
};
