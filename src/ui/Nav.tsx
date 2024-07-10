import Logo from "./Logo";
import Sidebar from "./Sidebar";
import SidebarOptions from "./SidebarOptions";

export default function Nav({
  navigationVisibility,
  setNavigationVisibility,
}: {
  navigationVisibility: string;
  setNavigationVisibility: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div
      className={`${navigationVisibility === "hidden" ? "fixed translate-x-[-100%]" : " absolute bottom-0 left-0 right-0 top-0 z-10 h-screen overflow-hidden  bg-slate-900"}  font-semibold lg:relative lg:translate-x-0`}
    >
      <Logo />
      <Sidebar setNavigationVisibility={setNavigationVisibility} />

      <SidebarOptions />
    </div>
  );
}
