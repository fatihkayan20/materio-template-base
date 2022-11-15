import { Theme } from "@mui/material";

type ReturnType = {
  MuiAccordion: {
    styleOverrides: {
      root: {
        "&.Mui-disabled": {
          backgroundColor: string;
        };
        "&.Mui-expanded": {
          boxShadow: string;
        };
      };
    };
  };
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: string;
        "& + .MuiCollapse-root": {
          "& .MuiAccordionDetails-root:first-of-type": {
            paddingTop: number;
          };
        };
      };
      content: {
        margin: string;
      };
      expandIconWrapper: {
        color: string;
      };
    };
  };
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: string;
        "& + .MuiAccordionDetails-root": {
          paddingTop: number;
        };
      };
    };
  };
};

const Accordion = (theme: Theme): ReturnType => {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`,
          },
          "&.Mui-expanded": {
            boxShadow: theme.shadows[3],
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: `0 ${theme.spacing(5)}`,
          "& + .MuiCollapse-root": {
            "& .MuiAccordionDetails-root:first-of-type": {
              paddingTop: 0,
            },
          },
        },
        content: {
          margin: `${theme.spacing(2.5)} 0`,
        },
        expandIconWrapper: {
          color: theme.palette.text.secondary,
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5),
          "& + .MuiAccordionDetails-root": {
            paddingTop: 0,
          },
        },
      },
    },
  };
};
export default Accordion;
