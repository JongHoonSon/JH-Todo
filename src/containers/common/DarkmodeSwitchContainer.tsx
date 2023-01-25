import { useAppDispatch, useAppSelector } from "../../store/store";
import { themeSlice } from "../../store/themeSlice";
import { themeModeType } from "../../styles/theme";
import { DarkmodeSwitch } from "./../../components/common/DarkmodeSwitch";

export const DarkmodeSwitchContainer = () => {
  const { themeMode } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();
  const { changeThemeMode } = themeSlice.actions;

  const handleCurrentThemeChange = (newThemeMode: themeModeType) => {
    dispatch(changeThemeMode(newThemeMode));
  };
  return (
    <DarkmodeSwitch
      themeMode={themeMode}
      handleCurrentThemeChange={handleCurrentThemeChange}
    />
  );
};