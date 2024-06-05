import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormRow from "../../ui/FormRow";
import { schema } from "../../validation/MembersValidation.tsx";
import useCreateMember from "./useCreateMember";
import { useEditMember } from "./useEditMember";
import FormInput from "../../ui/FormInput.tsx";
import Form from "../../ui/Form.tsx";
import ButtonsContainer from "../../ui/ButtonsContainer.tsx";

interface CommonData {
  city: string;
  email: string;
  gender: string;
  name: string;
  phone: string;
}
interface MemberTypes extends CommonData {
  id: string;
}

interface PropsType {
  handleCloseModal?: () => void;
  member?: MemberTypes;
}

function AddMemberForm({
  member = {} as MemberTypes,
  handleCloseModal,
}: PropsType) {
  const { id, ...memberEditData } = member;
  const isEditingSession = Boolean(id);
  const { createMember } = useCreateMember();
  const { editMember } = useEditMember();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: isEditingSession ? memberEditData : {},
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = (data: CommonData) => {
    if (isEditingSession) {
      editMember({ newMember: data, id });
    } else {
      createMember({ ...data });
    }
    handleCloseModal?.();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow name="name" label="Imię i nazwisko">
        <FormInput
          errors={errors}
          inputName="name"
          register={register}
          formType="text"
        />
      </FormRow>
      <FormRow name="email" label="E-mail">
        <FormInput
          errors={errors}
          inputName="email"
          register={register}
          formType="email"
        />
      </FormRow>
      <FormRow name="phone" label="Telefon">
        <FormInput
          errors={errors}
          inputName="phone"
          register={register}
          formType="text"
        />
      </FormRow>
      <FormRow name="gender" label="Płeć">
        <select
          id="gender"
          {...register("gender")}
          className="col-start-1 col-end-4 h-9 w-80 rounded-md border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800"
        >
          <option value="">Wybierz płeć</option>
          <option value="Kobieta">Kobieta</option>
          <option value="Mężczyzna">Mężczyzna</option>
          <option value="Inna">Inna</option>
        </select>
        {errors.gender?.message && (
          <p className="col-start-4 col-end-7">{errors.gender.message}</p>
        )}
      </FormRow>
      <FormRow name="city" label="Miasto">
        <FormInput
          errors={errors}
          inputName="city"
          register={register}
          formType="text"
        />
      </FormRow>

      <ButtonsContainer
        isEditingSession={isEditingSession}
        handleClick={() => handleCloseModal?.()}
      />
    </Form>
  );
}

export default AddMemberForm;
