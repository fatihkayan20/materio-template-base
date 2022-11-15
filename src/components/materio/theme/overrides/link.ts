type ReturnType = {
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: string;
      };
    };
  };
};

const MuiLink = (): ReturnType => {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  };
};

export default MuiLink;
