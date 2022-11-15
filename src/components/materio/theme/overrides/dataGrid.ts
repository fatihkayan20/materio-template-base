import { Theme } from "@mui/material";

type ReturnType = {
  MuiDataGrid: {
    styleOverrides: {
      root: {
        border: number;
        color: string;
        "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within": {
          outline: string;
        };
      };
      toolbarContainer: {
        paddingRight: string;
        paddingLeft: string;
      };
      columnHeaders: {
        maxHeight: string;
        minHeight: string;
        lineHeight: string;
        backgroundColor: string;
      };
      columnHeader: {
        height: "54px";
        "&:not(.MuiDataGrid-columnHeaderCheckbox)": {
          padding: string;
          "&:first-of-type": {
            paddingLeft: string;
          };
        };
        "&:last-of-type": {
          paddingRight: string;
        };
      };
      columnHeaderCheckbox: {
        maxWidth: string;
        minWidth: string;
      };
      columnHeaderTitleContainer: {
        padding: number;
      };
      columnHeaderTitle: {
        fontWeight: number;
        fontSize: string;
        letterSpacing: string;
        textTransform: string;
      };
      columnSeparator: {
        color: string;
      };
      virtualScroller: {
        marginTop: string;
      };
      virtualScrollerRenderZone: {
        "& .MuiDataGrid-row": {
          maxHeight: string;
          minHeight: string;
        };
      };
      row: {
        "&:last-child": {
          "& .MuiDataGrid-cell": {
            borderBottom: number;
          };
        };
      };
      cell: {
        maxHeight: string;
        minHeight: string;
        lineHeight: string;
        borderColor: string;
        "&:not(.MuiDataGrid-cellCheckbox)": {
          padding: string;
          "&:first-of-type": {
            paddingLeft: string;
          };
        };
        "&:last-of-type": {
          paddingRight: string;
        };
        "&:focus, &:focus-within": {
          outline: string;
        };
      };
      cellCheckbox: {
        maxWidth: string;
        minWidth: string;
      };
      editInputCell: {
        padding: number;
        color: string;
        "& .MuiInputBase-input": {
          padding: number;
        };
      };
      footerContainer: {
        minHeight: string;
        borderTop: string;
        "& .MuiTablePagination-toolbar": {
          minHeight: string;
        };
        "& .MuiTablePagination-displayedRows, & .MuiTablePagination-selectLabel": {
          color: string;
        };
      };
    };
    defaultProps: {
      rowHeight: number;
      headerHeight: number;
    };
  };
};

const DataGrid = (theme: Theme): ReturnType => {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 0,
          color: theme.palette.text.primary,
          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
            {
              outline: "none",
            },
        },
        toolbarContainer: {
          paddingRight: `${theme.spacing(5)} !important`,
          paddingLeft: `${theme.spacing(3.25)} !important`,
        },
        columnHeaders: {
          maxHeight: "54px !important",
          minHeight: "54px !important",
          lineHeight: "24px !important",
          backgroundColor: theme.palette.customColors.tableHeaderBg,
        },
        columnHeader: {
          height: "54px",
          "&:not(.MuiDataGrid-columnHeaderCheckbox)": {
            padding: theme.spacing(4),
            "&:first-of-type": {
              paddingLeft: theme.spacing(5),
            },
          },
          "&:last-of-type": {
            paddingRight: theme.spacing(5),
          },
        },
        columnHeaderCheckbox: {
          maxWidth: "58px !important",
          minWidth: "58px !important",
        },
        columnHeaderTitleContainer: {
          padding: 0,
        },
        columnHeaderTitle: {
          fontWeight: 600,
          fontSize: "0.75rem",
          letterSpacing: "0.17px",
          textTransform: "uppercase",
        },
        columnSeparator: {
          color: theme.palette.divider,
        },
        virtualScroller: {
          marginTop: "54px !important",
        },
        virtualScrollerRenderZone: {
          "& .MuiDataGrid-row": {
            maxHeight: "50px !important",
            minHeight: "50px !important",
          },
        },
        row: {
          "&:last-child": {
            "& .MuiDataGrid-cell": {
              borderBottom: 0,
            },
          },
        },
        cell: {
          maxHeight: "50px !important",
          minHeight: "50px !important",
          lineHeight: "20px !important",
          borderColor: theme.palette.divider,
          "&:not(.MuiDataGrid-cellCheckbox)": {
            padding: theme.spacing(4),
            "&:first-of-type": {
              paddingLeft: theme.spacing(5),
            },
          },
          "&:last-of-type": {
            paddingRight: theme.spacing(5),
          },
          "&:focus, &:focus-within": {
            outline: "none",
          },
        },
        cellCheckbox: {
          maxWidth: "58px !important",
          minWidth: "58px !important",
        },
        editInputCell: {
          padding: 0,
          color: theme.palette.text.primary,
          "& .MuiInputBase-input": {
            padding: 0,
          },
        },
        footerContainer: {
          minHeight: "50px !important",
          borderTop: `1px solid ${theme.palette.divider}`,
          "& .MuiTablePagination-toolbar": {
            minHeight: "50px !important",
          },
          "& .MuiTablePagination-displayedRows, & .MuiTablePagination-selectLabel":
            {
              color: theme.palette.text.primary,
            },
        },
      },
      defaultProps: {
        rowHeight: 50,
        headerHeight: 54,
      },
    },
  };
};
export default DataGrid;
