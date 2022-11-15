import Box from "@mui/material/Box";
import themeConfig from "../../../../configs/themeConfig";
import { HorizontalNavItemsType } from "../../../types";
import HorizontalNavItems from "./HorizontalNavItems";

interface Props {
  readonly horizontalNavItems?: HorizontalNavItemsType;
}

const Navigation = (props: Props): React.ReactElement => {
  return (
    <Box
      className={"menu-content"}
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        "& > *": {
          "&:not(:last-child)": { mr: 2 },
          ...(themeConfig.menuTextTruncate && { maxWidth: 220 }),
        },
      }}>
      <HorizontalNavItems {...props} />
    </Box>
  );
};
export default Navigation;
