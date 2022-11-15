import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import React from "react";

const FallbackSpinner = (): React.ReactNode => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}>
      <Box
        sx={{
          height: "20vh",
          width: "17%",
          position: "relative",
          overflow: "hidden",
        }}>
        <Image
          src={"/logo.png"}
          alt={"logo"}
          objectFit={"contain"}
          objectPosition={"bottom"}
          layout={"fill"}
        />
      </Box>
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  );
};

export default FallbackSpinner;
