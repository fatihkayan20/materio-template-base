import { Theme } from "@mui/material";
import { Skin } from "../../layouts/types";

type ReturnType = {
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: string;
        "& .card-more-options": {
          marginTop: string;
          marginRight: string;
        };
      };
    };
  };
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: string;
        "& + .MuiCardContent-root, & + .MuiCollapse-root .MuiCardContent-root": {
          paddingTop: number;
        };
        "& .MuiCardHeader-subheader": {
          fontSize: string;
        };
      };
      title: {
        lineHeight: number;
        fontWeight: number;
        fontSize: string;
        letterSpacing: string;
      };
      action: {
        marginTop: number;
        marginRight: number;
      };
    };
  };
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: string;
        "& + .MuiCardContent-root": {
          paddingTop: number;
        };
        "&:last-of-type": {
          paddingBottom: string;
        };
        "& + .MuiCardActions-root": {
          paddingTop: number;
        };
      };
    };
  };
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: string;
        "&.card-action-dense": {
          padding: string;
          ".MuiCard-root .MuiCardMedia-root + &": {
            paddingTop: string;
          };
          ".MuiCard-root &:first-of-type": {
            paddingTop: string;
            paddingBottom: string;
            "& + .MuiCardContent-root": {
              paddingTop: number;
            };
            "& + .MuiCardHeader-root": {
              paddingTop: number;
            };
          };
        };
        "& .MuiButton-text": {
          paddingLeft: string;
          paddingRight: string;
        };
      };
    };
  };
};

const Card = (theme: Theme, skin: Skin): ReturnType => {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: skin !== "bordered" ? theme.shadows[6] : theme.shadows[0],
          ...(skin === "bordered" && {
            border: `1px solid ${theme.palette.divider}`,
          }),
          "& .card-more-options": {
            marginTop: theme.spacing(-1),
            marginRight: theme.spacing(-3),
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5),
          "& + .MuiCardContent-root, & + .MuiCollapse-root .MuiCardContent-root":
            {
              paddingTop: 0,
            },
          "& .MuiCardHeader-subheader": {
            fontSize: "0.875rem",
          },
        },
        title: {
          lineHeight: 1,
          fontWeight: 500,
          fontSize: "1.25rem",
          letterSpacing: "0.0125em",
        },
        action: {
          marginTop: 0,
          marginRight: 0,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5),
          "& + .MuiCardContent-root": {
            paddingTop: 0,
          },
          "&:last-of-type": {
            paddingBottom: theme.spacing(5),
          },
          "& + .MuiCardActions-root": {
            paddingTop: 0,
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5),
          "&.card-action-dense": {
            padding: theme.spacing(0, 2.5, 2.5),
            ".MuiCard-root .MuiCardMedia-root + &": {
              paddingTop: theme.spacing(2.5),
            },
            ".MuiCard-root &:first-of-type": {
              paddingTop: theme.spacing(5),
              paddingBottom: theme.spacing(5),
              "& + .MuiCardContent-root": {
                paddingTop: 0,
              },
              "& + .MuiCardHeader-root": {
                paddingTop: 0,
              },
            },
          },
          "& .MuiButton-text": {
            paddingLeft: theme.spacing(2.5),
            paddingRight: theme.spacing(2.5),
          },
        },
      },
    },
  };
};

export default Card;
