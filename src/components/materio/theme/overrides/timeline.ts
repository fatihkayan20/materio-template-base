import { Theme } from "@mui/material";
import { hexToRGBA } from "../../utils/hex-to-rgba";

type ReturnType = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: string;
      };
    };
  };
  MuiTableCell: {
    styleOverrides: {
      root: {
        color?: string;
      };
    };
  };

  MuiTimelineItem: {
    styleOverrides: {
      root: {
        "&:not(:last-of-type)": {
          "& .MuiTimelineContent-root": {
            marginBottom: string;
          };
        };
      };
    };
  };

  MuiTimelineConnector: {
    styleOverrides: {
      root: {
        backgroundColor: string;
      };
    };
  };

  MuiTimelineContent: {
    styleOverrides: {
      root: {
        marginTop: string;
      };
    };
  };

  MuiTimelineDot: {
    styleOverrides: {
      filledPrimary: {
        boxShadow: string;
      };
      filledSecondary: {
        boxShadow: string;
      };
      filledSuccess: {
        boxShadow: string;
      };
      filledError: {
        boxShadow: string;
      };
      filledWarning: {
        boxShadow: string;
      };
      filledInfo: {
        boxShadow: string;
      };
      filledGrey: {
        boxShadow: string;
      };
      outlinedPrimary: {
        "& svg": { color: string };
      };
      outlinedSecondary: {
        "& svg": { color: string };
      };
      outlinedSuccess: {
        "& svg": { color: string };
      };
      outlinedError: {
        "& svg": { color: string };
      };
      outlinedWarning: {
        "& svg": { color: string };
      };
      outlinedInfo: {
        "& svg": { color: string };
      };
      outlinedGrey: {
        "& svg": { color: string };
      };
    };
  };
};

const Timeline = (theme: Theme): ReturnType => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: undefined,
        },
      },
    },
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          "&:not(:last-of-type)": {
            "& .MuiTimelineContent-root": {
              marginBottom: theme.spacing(4),
            },
          },
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.divider,
        },
      },
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(0.5),
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        filledPrimary: {
          boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.primary.main, 0.12)}`,
        },
        filledSecondary: {
          boxShadow: `0 0 0 3px ${hexToRGBA(
            theme.palette.secondary.main,
            0.12,
          )}`,
        },
        filledSuccess: {
          boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.success.main, 0.12)}`,
        },
        filledError: {
          boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.error.main, 0.12)}`,
        },
        filledWarning: {
          boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.warning.main, 0.12)}`,
        },
        filledInfo: {
          boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.info.main, 0.12)}`,
        },
        filledGrey: {
          boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.grey[400], 0.12)}`,
        },
        outlinedPrimary: {
          "& svg": { color: theme.palette.primary.main },
        },
        outlinedSecondary: {
          "& svg": { color: theme.palette.secondary.main },
        },
        outlinedSuccess: {
          "& svg": { color: theme.palette.success.main },
        },
        outlinedError: {
          "& svg": { color: theme.palette.error.main },
        },
        outlinedWarning: {
          "& svg": { color: theme.palette.warning.main },
        },
        outlinedInfo: {
          "& svg": { color: theme.palette.info.main },
        },
        outlinedGrey: {
          "& svg": { color: theme.palette.grey[400] },
        },
      },
    },
  };
};
export default Timeline;
