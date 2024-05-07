import { useForm } from "react-hook-form";
import { useUpdateUserPassword } from "../authentication/useUpdateUserPassword";
import Input from "../../ui/Input";
import StyledButton from "../../ui/StyledButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/UpdateUserPaasswordValidation";

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
      className="flex flex-col divide-y divide-slate-700 rounded-lg border-2 border-slate-700 bg-slate-900/70 px-6 pb-3 pt-4"
    >
      <h3 className="pb-4 text-start text-2xl text-accentColor2">
        Zmień hasło:
      </h3>
      <Input
        label="Nowe hasło"
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
      <div className="flex justify-end gap-10 text-sm">
        <StyledButton type="reset">Anuluj</StyledButton>
        <StyledButton styleType="add">Zmień</StyledButton>
      </div>
    </form>
  );
}
