import { PaletteMode } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import WeatherNight from "mdi-material-ui/WeatherNight";
import WeatherSunny from "mdi-material-ui/WeatherSunny";
import { Settings } from "../../../context/settingsContext";

interface Props {
  settings: Settings;
  saveSettings: (values: Settings) => void;
}

const ModeToggler = (props: Props): React.ReactElement => {
  const { settings, saveSettings } = props;
  const handleModeChange = (mode: PaletteMode): void => {
    saveSettings({ ...settings, mode });
  };
  const handleModeToggle = (): void => {
    if (settings.mode === "light") {
      handleModeChange("dark");
    } else {
      handleModeChange("light");
    }
  };
  return (
    <IconButton
      color={"inherit"}
      aria-haspopup={"true"}
      onClick={handleModeToggle}>
      {settings.mode === "dark" ? <WeatherSunny /> : <WeatherNight />}
    </IconButton>
  );
};

export default ModeToggler;
