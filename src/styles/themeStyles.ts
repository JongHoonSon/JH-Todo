import { ITheme } from "styled-components";
import { themeModes } from "../constants/themeConstants";
import { themeModeType } from "../types/themeTypes";
import { colors } from "./colors";

const lightTheme: ITheme = {
  bgColor_primary: colors.CYAN9,
  bgColor_secondary: colors.CYAN8,
  bgColor_tertiary: colors.CYAN7,
  textColor_primary: colors.GRAY0,
  textColor_secondary: colors.GRAY2,
  textColor_tertiary: colors.GRAY4,
  borderColor: colors.GRAY2,
  themeColor: colors.CYAN3,
};

const darkTheme: ITheme = {
  bgColor_primary: colors.GRAY9,
  bgColor_secondary: colors.GRAY8,
  bgColor_tertiary: colors.GRAY7,
  textColor_primary: colors.CYAN5,
  textColor_secondary: colors.CYAN4,
  textColor_tertiary: colors.CYAN3,
  borderColor: colors.GRAY2,
  themeColor: colors.GRAY6,
};

export const getCurrentThemeMode = (): themeModeType => {
  const savedThemeMode: string | null = window.localStorage.getItem("theme");

  if (savedThemeMode) {
    if (savedThemeMode === "lightTheme") {
      return themeModes.LIGHT_THEME;
    } else {
      return themeModes.DARK_THEME;
    }
  } else {
    setCurrentThemeMode(themeModes.LIGHT_THEME);
    return themeModes.LIGHT_THEME;
  }
};

export const setCurrentThemeMode = (newThemeMode: themeModeType): void => {
  if (
    newThemeMode === themeModes.LIGHT_THEME ||
    newThemeMode === themeModes.DARK_THEME
  ) {
    window.localStorage.setItem("theme", newThemeMode);
  }
};

export const getCurrentTheme = (themeMode: themeModeType): ITheme => {
  if (themeMode === themeModes.DARK_THEME) {
    return darkTheme;
  } else {
    return lightTheme;
  }
};
