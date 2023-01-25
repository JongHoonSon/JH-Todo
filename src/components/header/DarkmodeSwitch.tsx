import Switch from "@mui/material/Switch";
import { setCurrentThemeMode, themeModeType } from "../../styles/theme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import styled from "styled-components";

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
    <>
      <Switch
        id="darkmode_switch"
        color="default"
        checked={currentThemeMode === "darkTheme" ? true : false}
        onChange={handleThemeChange}
      />

      <Label htmlFor="darkmode_switch">
        {currentThemeMode === "darkTheme" ? (
          <>
            <CustomDarkModeIcon />
            다크모드 ON
          </>
        ) : (
          <>
            <CustomLightModeIcon />
            라이트모드 ON
          </>
        )}
      </Label>
    </>
  );
};

const CustomDarkModeIcon = styled(DarkModeIcon)`
  color: ${(props) => props.theme.textColor_tertiary};
  margin-right: 5px;
`;

const CustomLightModeIcon = styled(LightModeIcon)`
  color: ${(props) => props.theme.textColor_tertiary};
  margin-right: 5px;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;

  color: ${(props) => props.theme.textColor_tertiary};

  cursor: pointer;
`;