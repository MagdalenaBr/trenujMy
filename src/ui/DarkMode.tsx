import { useContext } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { DarkModeContext } from "../context/DarkModeContext";
export default function DarkMode() {
  const ModeContext = useContext(DarkModeContext);

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  } else {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }

  return (
    <button onClick={ModeContext?.toggleDarkMode}>
      {(ModeContext?.darkMode || localStorage.getItem("theme") === "dark") &&
     ( !document.documentElement.classList.contains("light") && localStorage.getItem("theme") !== "light") ? (
        <HiOutlineSun />
      ) : (
        <HiOutlineMoon />
      )}
    </button>
  );
}
