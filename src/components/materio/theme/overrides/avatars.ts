import { Theme } from "@mui/material";

type ReturnType = {
  MuiAvatar: {
    styleOverrides: {
      colorDefault: {
        color: string;
        backgroundColor: string;
      };
      rounded: {
        borderRadius: number;
      };
    };
  };
  MuiAvatarGroup: {
    styleOverrides: {
      root: {
        justifyContent: "flex-end";
        ".MuiCard-root & .MuiAvatar-root": {
          borderColor: string;
        };
      };
    };
  };
};

const Avatar = (theme: Theme): ReturnType => {
  return {
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          color: theme.palette.text.secondary,
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[700],
        },
        rounded: {
          borderRadius: 5,
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          justifyContent: "flex-end",
          ".MuiCard-root & .MuiAvatar-root": {
            borderColor: theme.palette.background.paper,
          },
        },
      },
    },
  };
};

export default Avatar;
