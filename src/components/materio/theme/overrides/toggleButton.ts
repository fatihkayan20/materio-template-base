type ReturnType = {
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        borderRadius: number;
      };
    };
  };
  MuiToggleButton: {
    styleOverrides: {
      root: {
        borderRadius: number;
        textTransform: string;
      };
    };
  };
};

const ToggleButton = (): ReturnType => {
  return {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: "none",
        },
      },
    },
  };
};

export default ToggleButton;
