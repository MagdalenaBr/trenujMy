import MainContainer from "../ui/MainContainer";
import CreateUserForm from "../features/users/CreateUserForm";
function Users() {
  return (
    <MainContainer title="Użytkownicy">
      <div className="w-full rounded-md bg-slate-900/70 py-6 ">
        <div className="mx-auto w-4/6">
          <h2 className=" pb-8 text-start text-2xl text-accentColor2">
            Dodaj nowego użytkownika:
          </h2>
          <CreateUserForm />
        </div>
      </div>
    </MainContainer>
  );
}

export default Users;
