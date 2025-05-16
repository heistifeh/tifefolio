'use client';
type Theme = "light" | "dark";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

import { init } from "next/dist/compiled/webpack/webpack";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState<boolean>(false);

  //update theme
  const setThemeFunction = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setMounted(true);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  //toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setThemeFunction(newTheme);
  };

  //initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);
  }, []);

  // prevent flash at wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//use custom hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
