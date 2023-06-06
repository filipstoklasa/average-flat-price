import { ToggleThemeContext } from "./provider";
import { useContext } from "react";

export const useToggleTheme = () => useContext(ToggleThemeContext);
