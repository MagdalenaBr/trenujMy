import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/UserValidation";
import useUserSignUp from "../authentication/useUserSignUp";
import ButtonsContainer from "../../ui/ButtonsContainer";

export default function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const { signUp } = useUserSignUp();

  function onSubmit(data: {
    name: string;
    password: string;
    confirmPassword: string;
    email: string;
  }) {
    const { name, email, password } = data;

    signUp(
      { email, password, name },
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
      <h3 className="pb-4 text-start text-2xl text-accentColor2">
        Dodaj nowego użytkownika:
      </h3>
      <Input
        label="Nazwa"
        type="text"
        id="name"
        register={register}
        errors={errors}
      />
      <Input
        label="Email"
        type="email"
        id="email"
        register={register}
        errors={errors}
      />
      <Input
        label="Hasło"
        type="password"
        id="password"
        register={register}
        errors={errors}
      />
      <Input
        label="Powtórz hasło"
        type="password"
        id="confirmPassword"
        register={register}
        errors={errors}
      />
      <ButtonsContainer />
    </form>
  );
}
