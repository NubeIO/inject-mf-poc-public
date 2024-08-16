import { injectable } from "inversify";
import { create } from "zustand";

import DEFAULT_COLORS from "../../assets/themes/default.json";
import { Store } from "../common";
import { Theme, ThemeColors } from "./theme-type";

const DEFAULT_THEME = "flex";

export default function setGlobalColorTheme(
  themeMode: "light" | "dark",
  theme: ThemeColors,
) {
  const colors = theme[themeMode] as {
    [key: string]: string;
  };

  const prefixesToConvert = ["font"];

  for (const key in colors) {
    const cssVarKey = prefixesToConvert.some((prefix) => key.startsWith(prefix))
      ? key.replace(/([A-Z])/g, "-$1").toLowerCase()
      : key;

    document.documentElement.style.setProperty(`--${cssVarKey}`, colors[key]);
  }
}

export type ThemeStore = {
  readonly theme: string;
  readonly mode: Theme;
  readonly availableThemes: Record<string, ThemeColors>;
  registerTheme: (name: string, theme: ThemeColors) => void;
  overrideTheme: (name: string, theme: ThemeColors) => void;
  setTheme: (name: string) => void;
  setMode: (mode: Theme) => void;
};

const applyGlobalMode = (mode: Theme) => {
  const root = window.document.documentElement;

  root.classList.remove("light", "dark");

  if (mode === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    root.classList.add(systemTheme);
    return;
  }

  root.classList.add(mode);
};

const applyGlobalTheme = (mode: Theme, theme: ThemeColors) => {
  if (mode === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setGlobalColorTheme(systemTheme, theme);
  } else {
    setGlobalColorTheme(mode, theme);
  }
};

@injectable()
export class ThemeRegistry implements ThemeStore, Store<ThemeStore> {
  private store = create<ThemeStore>((set, get) => ({
    theme: DEFAULT_THEME,
    mode: "system",
    availableThemes: {},
    registerTheme: (name, theme) => {
      const currentTheme = get().theme;

      set((state) => ({
        theme: currentTheme == DEFAULT_THEME ? name : currentTheme,
        availableThemes: {
          ...state.availableThemes,
          [name]: theme,
        },
      }));
    },
    overrideTheme: (name, theme) => {
      set(() => ({
        theme: name,
        availableThemes: {
          [name]: theme,
        },
      }));
    },
    setTheme(name) {
      const theme = get().availableThemes[name];

      if (theme) {
        set(() => ({
          theme: name,
        }));
      }
    },
    setMode: (mode) => set(() => ({ mode })),
  }));

  constructor() {
    this.subscribe((state, prev) => {
      if (state.theme !== prev.theme || state.mode !== prev.mode) {
        const theme = state.availableThemes[state.theme];
        const mode = state.mode;
        applyGlobalMode(mode);
        applyGlobalTheme(mode, theme);
      }
    });
  }

  get theme() {
    return this.getState().theme;
  }

  get mode() {
    return this.getState().mode;
  }

  get availableThemes() {
    return this.getState().availableThemes;
  }

  registerTheme = (name: string, theme: ThemeColors) =>
    this.getState().registerTheme(name, theme);

  overrideTheme = (name: string, theme: ThemeColors) =>
    this.getState().overrideTheme(name, theme);

  setTheme = (name: string) => this.getState().setTheme(name);
  setMode = (mode: Theme) => this.getState().setMode(mode);

  useStore(): ThemeStore {
    return this.store();
  }

  getState(): ThemeStore {
    return this.store.getState();
  }

  subscribe = (listener: (state: ThemeStore, prevState: ThemeStore) => void) =>
    this.store.subscribe(listener);
}
