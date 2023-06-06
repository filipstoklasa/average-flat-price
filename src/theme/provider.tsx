import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import {
  createContext,
  useState,
  PropsWithChildren,
  useMemo,
  useCallback,
} from "react";
import noop from "lodash/noop";
import useMediaQuery from "@mui/material/useMediaQuery";

export enum Theme {
  light = "light",
  dark = "dark",
}

const createModeTheme = (mode: Theme) =>
  createTheme({
    palette: { mode },
    typography: {
      fontFamily: ["Roboto", '"Helvetica Neue"'].join(","),
      h1: {
        fontSize: "1.2rem",
        fontWeight: "400",
        "@media (min-width:600px)": {
          fontSize: "2.5rem",
        },
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              display: "none",
            },
          },
        },
      },
    },
  });

export const ToggleThemeContext = createContext({
  setTheme: noop,
});

export const ToggleThemeProvider = ({ children }: PropsWithChildren) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(
    prefersDarkMode ? Theme.dark : Theme.light
  );

  const currentTheme = useMemo(() => createModeTheme(theme), [theme]);

  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === Theme.dark ? Theme.light : Theme.dark)),
    []
  );

  return (
    <ToggleThemeContext.Provider value={{ setTheme: toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ToggleThemeContext.Provider>
  );
};
