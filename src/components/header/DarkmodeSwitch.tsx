import Switch from "@mui/material/Switch";
import { setCurrentThemeMode } from "../../styles/themeStyles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import styled from "styled-components";
import { themeModeType } from "../../types/themeTypes";

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
    <Container>
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
            <IconName>다크모드 ON</IconName>
          </>
        ) : (
          <>
            <CustomLightModeIcon />
            <IconName>라이트모드 ON</IconName>
          </>
        )}
      </Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 30px;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.themeColor};

  cursor: pointer;
`;

const CustomDarkModeIcon = styled(DarkModeIcon)`
  margin-right: 5px;
`;

const CustomLightModeIcon = styled(LightModeIcon)`
  margin-right: 5px;
`;

const IconName = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
