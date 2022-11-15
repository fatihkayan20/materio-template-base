import { Theme } from "@mui/material";

type ReturnType = {
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: number;
        marginRight: string;
        color: string;
      };
    };
  };
  MuiListItemAvatar: {
    styleOverrides: {
      root: {
        minWidth: number;
        marginRight: string;
      };
    };
  };
  MuiListItemText: {
    styleOverrides: {
      dense: {
        "& .MuiListItemText-primary": {
          color: string;
        };
      };
    };
  };
  MuiListSubheader: {
    styleOverrides: {
      root: {
        fontWeight: number;
        textTransform: string;
        color: string;
      };
    };
  };
};

const List = (theme: Theme): ReturnType => {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 0,
          marginRight: theme.spacing(2.25),
          color: theme.palette.text.secondary,
        },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: 0,
          marginRight: theme.spacing(4),
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        dense: {
          "& .MuiListItemText-primary": {
            color: theme.palette.text.primary,
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: "uppercase",
          color: theme.palette.text.primary,
        },
      },
    },
  };
};

export default List;
