export type ThemeColors = "Nube";
export interface ThemeColorStateParams {
  themeColor: ThemeColors;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>;
}

const themes = {
  Nube: {
    light: {
      background: "255, 255, 255",
      foreground: "9, 9, 11",
      muted: "244, 244, 245",
      mutedForeground: "113, 113, 122",
      popover: "255, 255, 255",
      popoverForeground: "255, 255, 255",
      border: "228, 228, 231",
      input: "228, 228, 231",
      card: "255, 255, 255",
      cardForeground: "244, 244, 245",
      primary: "29, 150, 128",
      primaryForeground: "244, 244, 245",
      secondary: "244, 244, 245",
      secondaryForeground: "244, 244, 245",
      accent: "244, 244, 245",
      accentForeground: "244, 244, 245",
      destructive: "127, 29, 29",
      destructiveForeground: "250, 250, 250",
      ring: "29, 150, 128",
      radius: "0.5rem",
      fontSans: "Times New Roman",
      fontMono: "Times New Roman",
    },
    dark: {
      background: "6, 18, 15",
      foreground: "246, 247, 247",
      muted: "18, 36, 33",
      mutedForeground: "128, 144, 142",
      popover: "6, 18, 15",
      popoverForeground: "246, 247, 247",
      border: "18, 36, 33",
      input: "18, 36, 33",
      card: "6, 18, 15",
      cardForeground: "246, 247, 247",
      primary: "29, 150, 128",
      primaryForeground: "246, 247, 247",
      secondary: "18, 36, 33",
      secondaryForeground: "246, 247, 247",
      accent: "18, 36, 33",
      accentForeground: "246, 247, 247",
      destructive: "127, 29, 29",
      destructiveForeground: "246, 247, 247",
      ring: "29, 150, 128",
      radius: "0.5rem",
      fontSans: "Times New Roman",
      fontMono: "Times New Roman",
    },
  },
  Daikin: {
    light: {
      background: "255, 255, 255",
      foreground: "9, 9, 11",
      muted: "244, 244, 245",
      mutedForeground: "113, 113, 122",
      popover: "255, 255, 255",
      popoverForeground: "255, 255, 255",
      border: "228, 228, 231",
      input: "228, 228, 231",
      card: "255, 255, 255",
      cardForeground: "244, 244, 245",
      primary: "68,199,244",
      primaryForeground: "244, 244, 245",
      secondary: "244, 244, 245",
      secondaryForeground: "244, 244, 245",
      accent: "244, 244, 245",
      accentForeground: "244, 244, 245",
      destructive: "127, 29, 29",
      destructiveForeground: "250, 250, 250",
      ring: "68,199,244",
      radius: "0.5rem",
      fontSans: "IBM Plex Sans",
      fontMono: "IBM Plex Mono",
    },
    dark: {
      background: "3, 41, 53",
      foreground: "246, 247, 247",
      muted: "6, 77, 101",
      mutedForeground: "128, 144, 142",
      popover: "6, 18, 15",
      popoverForeground: "246, 247, 247",
      border: "6, 77, 101",
      input: "6, 77, 101",
      card: "6, 18, 15",
      cardForeground: "246, 247, 247",
      primary: "68,199,244",
      primaryForeground: "246, 247, 247",
      secondary: "6, 77, 101",
      secondaryForeground: "246, 247, 247",
      accent: "6, 77, 101",
      accentForeground: "246, 247, 247",
      destructive: "127, 29, 29",
      destructiveForeground: "246, 247, 247",
      ring: "68,199,244",
      radius: "0.5rem",
      fontSans: "IBM Plex Sans",
      fontMono: "IBM Plex Mono",
    },
  },
};

export default function setGlobalColorTheme(
  themeMode: "light" | "dark",
  color: ThemeColors,
) {
  const theme = themes[color][themeMode] as {
    [key: string]: string;
  };

  const prefixesToConvert = ["font"];

  for (const key in theme) {
    const cssVarKey = prefixesToConvert.some((prefix) => key.startsWith(prefix))
      ? key.replace(/([A-Z])/g, "-$1").toLowerCase()
      : key;

    document.documentElement.style.setProperty(`--${cssVarKey}`, theme[key]);
  }
}
