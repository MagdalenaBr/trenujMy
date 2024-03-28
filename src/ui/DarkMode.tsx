import { useContext } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { DarkModeContext } from "../context/DarkModeContext";

export default function DarkMode() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  // if(darkMode) {
  //   document.documentElement.classList.add('dark')
  // } else {
  //   document.documentElement.classList.remove('dark')
  // }

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
}
