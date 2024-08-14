export type Theme = "dark" | "light" | "system";

export type ThemeColors = {
  light?: ThemeColor;
  dark?: ThemeColor;
};

export type ThemeColor = {
  background?: string;
  foreground?: string;
  card?: string;
  cardForeground?: string;
  popover?: string;
  popoverForeground?: string;
  primary?: string;
  primaryForeground?: string;
  secondary?: string;
  secondaryForeground?: string;
  muted?: string;
  mutedForeground?: string;
  accent?: string;
  accentForeground?: string;
  destructive?: string;
  destructiveForeground?: string;
  border?: string;
  input?: string;
  ring?: string;
  radius?: string;
  fontSans?: string;
  fontMono?: string;
};
