import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/UserValidation";
import useUserSignUp from "../authentication/useUserSignUp";
import Input from "../../ui/Input";
import ButtonsContainer from "../../ui/ButtonsContainer";
import useLoggedUser from "../authentication/useLoggedUser";

export default function CreateUserForm() {
  const { signUp } = useUserSignUp();
 const {user}=useLoggedUser()
 console.log(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data: {
    newUserName: string;
    newUserPassword: string;
    confirmNewUserPassword: string;
    newUserEamil: string;
  }) {
    const { newUserName, newUserPassword, newUserEamil } = data;
    signUp(
      { email: newUserEamil, password: newUserPassword, name: newUserName },
      {
        onSettled() {
          reset();
        },
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col  divide-y divide-slate-700"
    >
      <h3 className="pb-4 text-start text-2xl text-iconsColor">
        Dodaj nowego użytkownika:
      </h3>
      <Input
        label="Nazwa"
        type="text"
        id="newUserName"
        register={register}
        errors={errors}
      />
      <Input
        label="Email"
        type="email"
        id="newUserEamil"
        register={register}
        errors={errors}
      />
      <Input
        label="Hasło"
        type="password"
        id="newUserPassword"
        autocomplete="new-password"
        register={register}
        errors={errors}
      />
      <Input
        label="Powtórz hasło"
        type="password"
        autocomplete="new-password"
        id="confirmNewUserPassword"
        register={register}
        errors={errors}
      />
      <ButtonsContainer isEditingSession={true} deactivate={user?.email === 'test@test.com'} />
    </form>
  );
}
