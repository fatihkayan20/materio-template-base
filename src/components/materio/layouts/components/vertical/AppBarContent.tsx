// ** MUI Imports
import Box from "@mui/material/Box";
// ** Type Import
import { Settings } from "../../../context/settingsContext";
// ** Components
import ModeToggler from "../../../layouts/components/shared-components/ModeToggler";

interface Props {
  hidden: boolean;
  settings: Settings;
  toggleNavVisibility: () => void;
  saveSettings: (values: Settings) => void;
}

const AppBarContent = (props: Props): React.ReactElement => {
  // ** Props
  const { settings, saveSettings } = props;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      <Box
        className={"actions-left"}
        sx={{ mr: 2, display: "flex", alignItems: "center" }}>
        <ModeToggler settings={settings} saveSettings={saveSettings} />
      </Box>
      <Box
        className={"actions-right"}
        sx={{ display: "flex", alignItems: "center" }}></Box>
    </Box>
  );
};
export default AppBarContent;
