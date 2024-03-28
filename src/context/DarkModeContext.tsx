import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState( window.matchMedia("(prefers-color-scheme: dark)").matches);

  function toggleDarkMode() {
    if (darkMode === false) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
    setDarkMode(!darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
