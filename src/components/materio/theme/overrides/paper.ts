type ReturnType = {
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: string;
      };
    };
  };
};

const Paper = (): ReturnType => {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  };
};

export default Paper;
