import { useForm } from "react-hook-form";
import {useUpdateUserName} from "../authentication/useUpdateUserName";
import Input from "../../ui/Input";
import useLoggedUser from "../authentication/useLoggedUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/EditUserNameValidation";
import ButtonsContainer from "../../ui/ButtonsContainer";

interface InputType {
  email?: string;
  name: string;
}

export default function UpdateUserName() {
  const { user } = useLoggedUser();

  const { updateUser } = useUpdateUserName();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { email: user?.email, name: "" },
    resolver: yupResolver(schema),
  });

  function onSubmit(data: InputType) {
 
    const { name } = data;
    updateUser(
      { name },
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
        Zmień nazwę:
      </h3>
      <Input
        label="E-mail"
        value={user?.email}
        type="email"
        id="email"
        register={register}
        errors={errors}
        disabled={true}
      />
      <Input
        label="Nazwa"
        type="text"
        id="name"
        register={register}
        errors={errors}
      />

      <ButtonsContainer/>
    </form>
  );
}
