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
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: "#6b6b6b #2b2b2b",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: "#2b2b2b",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: "#6b6b6b",
              minHeight: 24,
              border: "3px solid #2b2b2b",
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "#2b2b2b",
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
