import { createContext, useContext, useEffect, useState } from "react";

import setGlobalColorTheme, { ThemeColors } from "./colors-theme";

export type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultColor?: ThemeColors;
  themeStorageKey?: string;
  colorStorageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeColor: ThemeColors;
  setThemeColor: (color: ThemeColors) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  themeColor: "Nube",
  setThemeColor: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultColor = "Nube",
  themeStorageKey = "key-ui-theme",
  colorStorageKey = "key-ui-brand",
  ...props
}: ThemeProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(themeStorageKey) as Theme) || defaultTheme,
  );

  const getSavedThemeColor = () => {
    try {
      return (
        (localStorage.getItem(colorStorageKey) as ThemeColors) || defaultColor
      );
    } catch (error) {
      "Zinc" as ThemeColors;
    }
  };

  const [themeColor, setThemeColor] = useState<ThemeColors>(
    getSavedThemeColor() as ThemeColors,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("themeColor", themeColor);

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      setGlobalColorTheme(systemTheme, themeColor);
    } else {
      setGlobalColorTheme(theme, themeColor);
    }

    if (!isMounted) {
      setIsMounted(true);
    }
  }, [themeColor, theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(themeStorageKey, theme);
      setTheme(theme);
    },
    themeColor,
    setThemeColor: (color: ThemeColors) => {
      localStorage.setItem(themeStorageKey, color);
      setThemeColor(color);
    },
  };

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
