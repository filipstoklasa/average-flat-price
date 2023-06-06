import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { Theme } from "../theme/provider";
import { useToggleTheme } from "../theme/constants";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeToggle = () => {
  const theme = useTheme();
  const { setTheme } = useToggleTheme();

  return (
    <IconButton onClick={setTheme} color="inherit">
      {theme.palette.mode === Theme.dark ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default ThemeToggle;
