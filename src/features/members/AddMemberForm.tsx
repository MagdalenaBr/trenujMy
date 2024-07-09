import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/MembersValidation.tsx";
import { useEditMember } from "./useEditMember";
import useCreateMember from "./useCreateMember.ts";
import FormRow from "../../ui/FormRow";
import FormInput from "../../ui/FormInput.tsx";
import Form from "../../ui/Form.tsx";
import ButtonsContainer from "../../ui/ButtonsContainer.tsx";
import FormOption from "../../ui/FormOption.tsx";
import {
  ActiveMemberTypes,
  CommonMemberDataTypes,
} from "../../types/membersTypes.ts";

interface PropsType {
  handleCloseModal?: () => void;
  member?: ActiveMemberTypes;
}

function AddMemberForm({
  member = {} as ActiveMemberTypes,
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

  const onSubmit = (data: CommonMemberDataTypes) => {
    if (isEditingSession) {
      editMember({ newMember: data, id });
    } else {
      createMember({ ...data });
    }
    handleCloseModal?.();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow name="name" label="Imię i nazwisko:">
        <FormInput
          errors={errors}
          inputName="name"
          register={register}
          formType="text"
        />
      </FormRow>
      <FormRow name="email" label="E-mail:">
        <FormInput
          errors={errors}
          inputName="email"
          register={register}
          formType="email"
        />
      </FormRow>
      <FormRow name="phone" label="Telefon:">
        <FormInput
          errors={errors}
          inputName="phone"
          register={register}
          formType="text"
        />
      </FormRow>
      <FormRow name="gender" label="Płeć:">
        <FormOption errors={errors} inputName="gender" register={register}>
          <option value="Kobieta">Kobieta</option>
          <option value="Mężczyzna">Mężczyzna</option>
          <option value="Inna">Inna</option>
        </FormOption>
      </FormRow>
      <FormRow name="city" label="Miasto:">
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
