type ReturnType = {
  MuiSelect: {
    styleOverrides: {
      select: {
        minWidth: string;
        "&.MuiTablePagination-select": {
          minWidth: string;
        };
      };
    };
  };
};

const MuiSelect = (): ReturnType => {
  return {
    MuiSelect: {
      styleOverrides: {
        select: {
          minWidth: "6rem !important",
          "&.MuiTablePagination-select": {
            minWidth: "1.5rem !important",
          },
        },
      },
    },
  };
};

export default MuiSelect;
