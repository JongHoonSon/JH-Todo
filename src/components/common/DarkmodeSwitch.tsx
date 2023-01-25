import Switch from "@mui/material/Switch";
import { setCurrentThemeMode, themeModeType } from "./../../styles/theme";

interface DarkmodeSwitchProps {
  currentThemeMode: themeModeType;
  handleCurrentThemeChange: (newThemeMode: themeModeType) => void;
}

export const DarkmodeSwitch = ({
  currentThemeMode,
  handleCurrentThemeChange,
}: DarkmodeSwitchProps) => {
  const handleThemeChange = () => {
    if (currentThemeMode === "darkTheme") {
      handleCurrentThemeChange("lightTheme");
      setCurrentThemeMode("lightTheme");
    } else {
      handleCurrentThemeChange("darkTheme");
      setCurrentThemeMode("darkTheme");
    }
  };

  return (
    <Switch
      color="default"
      checked={currentThemeMode === "darkTheme" ? true : false}
      onChange={handleThemeChange}
    />
  );
};
