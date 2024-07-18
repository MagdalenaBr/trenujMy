import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpdateUserPassword } from "../authentication/useUpdateUserPassword";
import { schema } from "../../validation/UpdateUserPaasswordValidation";
import Input from "../../ui/Input";
import ButtonsContainer from "../../ui/ButtonsContainer";

export default function UpdateUserPassword() {
  const { updateUserPassword } = useUpdateUserPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data: { password: string; confirmPassword: string }) {
    const { password } = data;
    updateUserPassword(
      { password },
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
        Zmień hasło:
      </h3>
      <Input
        label="Nowe hasło"
        type="password"
        id="password"
        autocomplete="new-password"
        register={register}
        errors={errors}
      />
      <Input
        label="Powtórz hasło"
        type="password"
        autocomplete="new-password"
        id="confirmPassword"
        register={register}
        errors={errors}
      />
      <ButtonsContainer isEditingSession={true} />
    </form>
  );
}
