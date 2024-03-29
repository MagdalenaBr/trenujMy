import { createContext, useState } from "react";

interface ContextTypes {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<ContextTypes | undefined>(
  undefined,
);

export default function DarkModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

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
