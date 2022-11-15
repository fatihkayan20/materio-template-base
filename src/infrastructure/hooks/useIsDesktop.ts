import { Theme, useMediaQuery } from "@mui/material";

export const useIsDesktop = (): boolean => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
};
