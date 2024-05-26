import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormInput from "../../ui/FormInput";
import FormRow from "../../ui/FormRow";
import { useGymMembership } from "./useGymMembership";
import ButtonsContainer from "../../ui/ButtonsContainer";
import { useChangeMembershipPrice } from "./useChangeMembershipPrice";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/GymMembershipValidation";

interface PropsType {
  handleCloseModal?: () => void;
}

export default function EditGymMembershipTypesForm({
  handleCloseModal,
}: PropsType) {
  const { gymMembership } = useGymMembership();
  const { changePrice } = useChangeMembershipPrice();
  console.log(gymMembership);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });
  function onSubmit(data: { 1: number; 2: number; 3: number; 4: number }) {
    changePrice(data);
    handleCloseModal?.();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {gymMembership?.map((membership) => (
        <FormRow
          name={String(membership.id)}
          label={membership.gymMembershipName}
        >
          <FormInput
            errors={errors}
            inputName={String(membership.id)}
            register={register}
            formType="number"
            value={membership.price}
          />
        </FormRow>
      ))}
      <ButtonsContainer handleClick={() => handleCloseModal?.()} />
    </Form>
  );
}
