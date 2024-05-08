import { useContext, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { DarkModeContext } from "../context/DarkModeContext";
import Button from "./Button";

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
    <Button handleClick={ModeContext?.toggleDarkMode as React.MouseEventHandler<HTMLButtonElement>}>
      {ModeContext?.darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </Button>
  );
}
