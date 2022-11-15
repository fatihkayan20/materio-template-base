import { Theme } from "@mui/material";

type ReturnType = {
  MuiTabs: {
    styleOverrides: {
      vertical: {
        minWidth: number;
        marginRight: string;
        borderRight: string;
        "& .MuiTab-root": {
          minWidth: number;
        };
      };
    };
  };
  MuiTab: {
    styleOverrides: {
      textColorSecondary: {
        "&.Mui-selected": {
          color: string;
        };
      };
    };
  };
};

const Tabs = (theme: Theme): ReturnType => {
  return {
    MuiTabs: {
      styleOverrides: {
        vertical: {
          minWidth: 130,
          marginRight: theme.spacing(4),
          borderRight: `1px solid ${theme.palette.divider}`,
          "& .MuiTab-root": {
            minWidth: 130,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        textColorSecondary: {
          "&.Mui-selected": {
            color: theme.palette.text.secondary,
          },
        },
      },
    },
  };
};

export default Tabs;
