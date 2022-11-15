import { Box } from "@mui/material";
import { ChevronLeft } from "mdi-material-ui";
import { useRouter } from "next/router";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface IPageButtonProps {
  readonly variant?: "contained" | "outlined";
  readonly hideTitle?: boolean;
  readonly onClick?: () => void;
}

export const PageBackButton: React.FunctionComponent<IPageButtonProps> = ({
  variant,
  hideTitle,
  onClick,
}) => {
  const router = useRouter();
  const { t } = useTranslation();

  const handlePage = React.useCallback(() => {
    router.back();
  }, [router]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        width: "min-content",
        padding: `${variant === "outlined" ? "0.5rem" : ".5rem 1.5rem"}`,
        fontWeight: "600",
        ...(variant == "contained" && {
          backgroundColor: "#fff",
          borderRadius: 1,
          boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.1)",
        }),
      }}
      onClick={onClick ?? handlePage}>
      <ChevronLeft fontSize={hideTitle ? "large" : "small"} />
      {!hideTitle && <>{t("button.back")}</>}
    </Box>
  );
};
