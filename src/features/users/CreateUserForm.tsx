import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import StyledButton from "../../ui/StyledButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/UserValidation";
import useUserSignUp from "../authentication/useUserSignUp";

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
    console.log(name, email, password);
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
      <div className="flex justify-end gap-10">
        <StyledButton styleType="add">Dodaj</StyledButton>
        <StyledButton type="reset">Anuluj</StyledButton>
      </div>
    </form>
  );
}
