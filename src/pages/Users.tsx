import MainContainer from "../ui/MainContainer";
import CreateUserForm from "../features/users/CreateUserForm";
import User from "./User";
import UpdateUserName from "../features/users/UpdateUserName";
import UpdateUserPassword from "../features/users/UpdateUserPassword";
import useLoggedUser from "../features/authentication/useLoggedUser";
import UserFormContainer from "../ui/UserFormContainer";
function Users() {
  const { user } = useLoggedUser();
  return (
    <MainContainer title="Użytkownicy">
      <div className="flex flex-col gap-12">


      <h2 className="rounded-md border-y-2 border-accentColor2 px-3 py-1 text-2xl font-bold text-accentColor2 self-start">
        {user?.user_metadata.userName}
      </h2>
      {/* <div className="w-full rounded-md bg-slate-900/70 py-6 ">
        <div className="mx-auto flex w-4/5 flex-col gap-10">
          <UpdateUserName />
          <UpdateUserPassword />
        </div>
     </div> */}

      <UserFormContainer>
        <UpdateUserName />
      </UserFormContainer>

      <UserFormContainer>
        <UpdateUserPassword />
      </UserFormContainer>

      <UserFormContainer>
        <CreateUserForm />
      </UserFormContainer>

      {/* <div className="w-full rounded-md bg-slate-900/70 py-6 ">
        <div className="mx-auto w-4/6">
          <UpdateUserName />
        </div>
      </div>

     <div className="w-full rounded-md bg-slate-900/70 py-6 ">
        <div className="mx-auto w-4/6">
          <UpdateUserPassword />
        </div>
      </div>

      <div className="w-full rounded-md bg-slate-900/70 py-6 ">
        <div className="mx-auto w-4/6">
          <h2 className=" pb-8 text-start text-2xl text-accentColor2">
            Dodaj nowego użytkownika:
          </h2>
          <CreateUserForm />
        </div>
      </div> */}
      </div>
    </MainContainer>
  );
}

export default Users;
