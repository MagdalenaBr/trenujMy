import DarkMode from "./DarkMode";
import LogOut from "../features/authentication/LogOut";
import useLoggedUser from "../features/authentication/useLoggedUser";

export default function SidebarOptions() {
  const { user } = useLoggedUser();
  return (
    <div className="row-[3_/_4]  text-xl text-accentColor2 flex flex-col items-center  px-5 pt-5">
      <div className="  w-[12rem] px-2">
        <div className=" flex items-center py-2">
          <LogOut />
          <span>{user?.user_metadata.userName}</span>
        </div>
        <DarkMode />
      </div>
    </div>
  );
}
