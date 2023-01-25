import { ITheme } from "styled-components";

const lightTheme: ITheme = {
  bgColor: "white",
  textColor: "black",
};

const darkTheme: ITheme = {
  bgColor: "black",
  textColor: "white",
};

interface IThemes {
  LIGHT_THEME: "lightTheme";
  DARK_THEME: "darkTheme";
}

export const themes: IThemes = {
  LIGHT_THEME: "lightTheme",
  DARK_THEME: "darkTheme",
};

export type themeModeType = "lightTheme" | "darkTheme";

export const getThemeMode = (): themeModeType => {
  const themeMode: string | null = window.localStorage.getItem("theme");

  if (themeMode) {
    if (themeMode === "lightTheme") {
      return themes.LIGHT_THEME;
    } else {
      return themes.DARK_THEME;
    }
  } else {
    setThemeMode(themes.LIGHT_THEME);
    return themes.LIGHT_THEME;
  }
};

export const setThemeMode = (newThemeMode: themeModeType): void => {
  if (
    newThemeMode === themes.LIGHT_THEME ||
    newThemeMode === themes.DARK_THEME
  ) {
    window.localStorage.setItem("theme", newThemeMode);
  }
};

export const getCurrentTheme = (themeMode: themeModeType): ITheme => {
  if (themeMode === themes.DARK_THEME) {
    return darkTheme;
  } else {
    return lightTheme;
  }
};
