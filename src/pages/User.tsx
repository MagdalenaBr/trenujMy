import { useForm } from "react-hook-form";
import useLoggedUser from "../features/authentication/useLoggedUser";
import Input from "../ui/Input";
import MainContainer from "../ui/MainContainer";
import StyledButton from "../ui/StyledButton";
import { useUpdateUserName } from "../features/authentication/useUpdateUserName";
import UpdateUserName from "../features/users/UpdateUserName";
import UpdateUserPassword from "../features/users/updateUserPassword";

export default function User() {
  const { user } = useLoggedUser();

  return (
    <MainContainer title="Aktualizuj konto">
      <div className="flex flex-col items-start gap-4">
        <h2 className="rounded-md border-y-2 border-accentColor2 px-3 py-1 text-2xl font-bold text-accentColor2">
          {user?.user_metadata.userName}
        </h2>
        <div className="w-full  py-3 text-lg">
          <div className="mx-auto flex w-4/5 flex-col gap-10">
            <UpdateUserName />
            <UpdateUserPassword />
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
