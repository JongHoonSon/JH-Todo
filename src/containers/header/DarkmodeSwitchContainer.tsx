import { useAppDispatch, useAppSelector } from "../../store/store";
import { themeSlice } from "../../store/themeSlice";
import { themeModeType } from "../../styles/theme";
import { DarkmodeSwitch } from "../../components/header/DarkmodeSwitch";

export const DarkmodeSwitchContainer = () => {
  const { currentThemeMode } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();
  const { changeThemeMode } = themeSlice.actions;

  const handleCurrentThemeChange = (newThemeMode: themeModeType) => {
    dispatch(changeThemeMode(newThemeMode));
  };
  return (
    <DarkmodeSwitch
      currentThemeMode={currentThemeMode}
      handleCurrentThemeChange={handleCurrentThemeChange}
    />
  );
};
