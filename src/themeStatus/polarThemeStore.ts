import { create } from 'zustand';

type ThemeKey = {
  colorTheme: ColorKeys;
  darkTheme: LightDarkKeys;
};

type Actions = {
  changeColorTheme: (color: ColorKeys) => void;
  changeDarkTheme: (dark: LightDarkKeys) => void;
};

export const usePolarThemeStore = create<ThemeKey & Actions>((set) => ({
  colorTheme: 'green',
  darkTheme: 'light',
  changeColorTheme: (color) => set(() => ({ colorTheme: color })),
  changeDarkTheme: (dark) => set(() => ({ darkTheme: dark })),
}));
