import MainContainer from "../ui/MainContainer";
import CreateUserForm from "../features/users/CreateUserForm";
import UpdateUserName from "../features/users/UpdateUserName";
import UpdateUserPassword from "../features/users/UpdateUserPassword";
import useLoggedUser from "../features/authentication/useLoggedUser";
import UserFormContainer from "../ui/UserFormContainer";
import { DEVICE_WIDTH } from "../utils/constants";
function Users() {

  const { user } = useLoggedUser();

  const displayUserName= <h2 className="self-start border-y-2 border-accentColor2 px-3 py-1 text-2xl font-bold text-accentColor2">
  {user?.user_metadata.userName}
</h2>
console.log(DEVICE_WIDTH);
  return (
    <MainContainer title="Użytkownicy" buttons={DEVICE_WIDTH > 767 && displayUserName }>
      <div className="flex flex-col gap-12">
        <UserFormContainer>
          <UpdateUserName />
        </UserFormContainer>

        <UserFormContainer>
          <UpdateUserPassword />
        </UserFormContainer>

        <UserFormContainer>
          <CreateUserForm />
        </UserFormContainer>
      </div>
    </MainContainer>
  );
}

export default Users;
