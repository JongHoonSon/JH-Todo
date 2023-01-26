import { useAppDispatch, useAppSelector } from "../../store/store";
import { themeSlice } from "../../store/themeSlice";
import { DarkmodeSwitch } from "../../components/header/DarkmodeSwitch";
import { themeModeType } from "../../types/themeTypes";

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
