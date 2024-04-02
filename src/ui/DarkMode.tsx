import { useContext, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { DarkModeContext } from "../context/DarkModeContext";
export default function DarkMode() {
  const ModeContext = useContext(DarkModeContext);
  
  useEffect(() => {
    if (ModeContext?.darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [ModeContext?.darkMode]);

  return (
    <button onClick={ModeContext?.toggleDarkMode}>
      {ModeContext?.darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
}
