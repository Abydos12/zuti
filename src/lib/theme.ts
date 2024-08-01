import { writable } from "svelte/store";

type Theme = undefined | "dark" | "light";
const STORAGE_KEY = "theme";
export const theme = themeStore();

function themeStore() {
  const { subscribe, set, update } = writable<Theme>(getDefaultTheme());

  return {
    subscribe,
    toggle: () => update((_theme: Theme) => toggleTheme(_theme)),
    reset: () => set(undefined),
  };
}

function preferDark(): boolean {
  return !!window.matchMedia("(prefers-color-scheme: dark)");
}

function preferLight(): boolean {
  return !!window.matchMedia("(prefers-color-scheme: light)");
}

function getDefaultTheme(): Theme {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme && isTheme(storedTheme)) {
    return storedTheme;
  }
  return undefined;
}

function toggleTheme(_theme: Theme): "dark" | "light" {
  if (_theme === "dark" || (_theme === undefined && preferDark())) {
    return "light";
  }
  return "dark";
}

function isTheme(t: unknown): t is Theme {
  return t === undefined || t === "dark" || t === "light";
}

theme.subscribe((_theme: Theme) => {
  if (_theme) {
    document.documentElement.setAttribute("data-theme", _theme);
    localStorage.setItem(STORAGE_KEY, _theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem(STORAGE_KEY);
  }
});
