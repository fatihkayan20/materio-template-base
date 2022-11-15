import { Theme } from "@mui/material";

type ReturnType = {
  MuiCalendarPicker: {
    styleOverrides: {
      root: {
        '& [role="presentation"]': {
          fontWeight: number;
          "& .PrivatePickersFadeTransitionGroup-root + .PrivatePickersFadeTransitionGroup-root > div": {
            marginRight: number;
          };
          "& .MuiIconButton-sizeSmall": {
            padding: string;
          };
          "& + div .MuiIconButton-root:not(.Mui-disabled)": {
            color: string;
          };
        };
        "& .PrivatePickersSlideTransition-root": {
          minHeight: number;
        };
      };
    };
  };
  MuiPickersDay: {
    styleOverrides: {
      root: {
        fontSize: string;
      };
    };
  };
  MuiClockPicker: {
    styleOverrides: {
      arrowSwitcher: {
        "& .MuiIconButton-root:not(.Mui-disabled)": {
          color: string;
        };
        "& + div": {
          "& > div": {
            backgroundColor: string;
            "& ~ .MuiIconButton-root span.MuiTypography-caption": {
              color: string;
            };
          };
        };
      };
    };
  };
  MuiMonthPicker: {
    styleOverrides: {
      root: {
        "& > .MuiTypography-root.Mui-selected": {
          fontSize: string;
        };
      };
    };
  };
};

const DateTimePicker = (theme: Theme): ReturnType => {
  return {
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          '& [role="presentation"]': {
            fontWeight: 400,
            "& .PrivatePickersFadeTransitionGroup-root + .PrivatePickersFadeTransitionGroup-root > div":
              {
                marginRight: 0,
              },
            "& .MuiIconButton-sizeSmall": {
              padding: theme.spacing(0.5),
            },
            "& + div .MuiIconButton-root:not(.Mui-disabled)": {
              color: theme.palette.text.secondary,
            },
          },
          "& .PrivatePickersSlideTransition-root": {
            minHeight: 240,
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
        },
      },
    },
    MuiClockPicker: {
      styleOverrides: {
        arrowSwitcher: {
          "& .MuiIconButton-root:not(.Mui-disabled)": {
            color: theme.palette.text.secondary,
          },
          "& + div": {
            "& > div": {
              backgroundColor:
                theme.palette.mode === "light"
                  ? theme.palette.grey[50]
                  : theme.palette.background.default,
              "& ~ .MuiIconButton-root span.MuiTypography-caption": {
                color: "inherit",
              },
            },
          },
        },
      },
    },
    MuiMonthPicker: {
      styleOverrides: {
        root: {
          "& > .MuiTypography-root.Mui-selected": {
            fontSize: "1rem",
          },
        },
      },
    },
  };
};

export default DateTimePicker;
