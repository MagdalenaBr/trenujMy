
import DarkMode from "./DarkMode";
import LogOut from "../features/authentication/LogOut";
import useLoggedUser from "../features/authentication/useLoggedUser";

export default function SidebarOptions() {
  const { user } = useLoggedUser();
  return (
    <div className="row-[3_/_4] flex flex-col gap-2 px-5 py-4 text-xl text-accentColor2">
      <DarkMode />
      <div className=" flex items-center">
        <LogOut />
        <span>{user?.user_metadata.userName}</span>
      </div>
    </div>
  );
}
