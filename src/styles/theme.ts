import { ITheme } from "styled-components";

const lightTheme: ITheme = {
  bgColor: "white",
  textColor: "black",
};

const darkTheme: ITheme = {
  bgColor: "black",
  textColor: "white",
};

interface IThemeModes {
  LIGHT_THEME: "lightTheme";
  DARK_THEME: "darkTheme";
}

export const themeModes: IThemeModes = {
  LIGHT_THEME: "lightTheme",
  DARK_THEME: "darkTheme",
};

export type themeModeType = "lightTheme" | "darkTheme";

export const getCurrentThemeMode = (): themeModeType => {
  const themeMode: string | null = window.localStorage.getItem("theme");

  if (themeMode) {
    if (themeMode === "lightTheme") {
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
