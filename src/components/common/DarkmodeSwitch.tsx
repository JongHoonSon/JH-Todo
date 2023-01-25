import Switch from "@mui/material/Switch";
import { setThemeMode, themeModeType } from "./../../styles/theme";

interface DarkmodeSwitchProps {
  themeMode: themeModeType;
  handleCurrentThemeChange: (newThemeMode: themeModeType) => void;
}

export const DarkmodeSwitch = ({
  themeMode,
  handleCurrentThemeChange,
}: DarkmodeSwitchProps) => {
  const handleThemeChange = () => {
    if (themeMode === "darkTheme") {
      handleCurrentThemeChange("lightTheme");
      setThemeMode("lightTheme");
    } else {
      handleCurrentThemeChange("darkTheme");
      setThemeMode("darkTheme");
    }
  };

  return (
    <Switch
      color="default"
      checked={themeMode === "darkTheme" ? true : false}
      onChange={handleThemeChange}
    />
  );
};
