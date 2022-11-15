import * as React from "react";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const FooterContent = (): React.ReactElement => {
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const { t } = useTranslation();
  const router = useRouter();

  const links = React.useMemo(
    () => [
      {
        title: t("footer.terms"),
        href: "/profile/terms",
      },
      {
        title: t("footer.privacy"),
        href: "/profile/data-protection",
      },
      {
        title: t("footer.imprint"),
        href: "/profile/imprint-and-privacy",
      },
    ],
    [t],
  );

  const handleRoute = (route: string): void => {
    router.push(route);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <Typography sx={{ mr: 2, color: "primary.main" }}>
        {`© ${new Date().getFullYear()} meistro solution Gmbh `}
      </Typography>
      {hidden ? null : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            "& :not(:last-child)": { mr: 10 },
          }}>
          {links.map((link) => (
            <Typography
              key={link.title}
              sx={{ color: "primary.main", cursor: "pointer" }}
              onClick={(): void => handleRoute(link.href)}>
              {t(link.title)}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FooterContent;
