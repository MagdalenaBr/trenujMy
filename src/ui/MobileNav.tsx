import { HiOutlineXMark } from "react-icons/hi2";
import { HiMenuAlt3 } from "react-icons/hi";

export default function MobileNav({
  navigationVisibility,
  setNavigationVisibility,
}: {
  navigationVisibility: string;
  setNavigationVisibility: React.Dispatch<React.SetStateAction<string>>;
}) {
  function showNav() {
    navigationVisibility === "hidden"
      ? setNavigationVisibility("")
      : setNavigationVisibility("hidden");
  }
  return (
    <div
      className={
        navigationVisibility
          ? "absolute left-0 right-0 z-20 h-9 w-full  bg-slate-900/80 backdrop-blur-sm lg:hidden"
          : ""
      }
    >
      <button
        className="absolute right-1 top-1 z-20 text-3xl lg:hidden"
        onClick={showNav}
      >
        {navigationVisibility ? <HiMenuAlt3 /> : <HiOutlineXMark />}
      </button>
    </div>
  );
}
