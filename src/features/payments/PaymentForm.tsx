import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import FormInput from "../../ui/FormInput";
import ButtonsContainer from "../../ui/ButtonsContainer";
import { useUserPurchasedMemberships } from "../gymMembership/useUserPurchasedMemberships";
import { useAddPayment } from "./useAddPayment";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/PaymentValidation";
import FormOption from "../../ui/FormOption";

interface PropsType {
  handleCloseModal?: () => void;
}

export default function PaymentForm({ handleCloseModal }: PropsType) {
  const memberIdParams = useParams();
  const memberId = memberIdParams.memberId as string;
  const { purchasedMemberships } = useUserPurchasedMemberships(memberId);

  const { addUserPayment } = useAddPayment();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: { purchasedMembershipId: string; amount: number }) {
    const newData = { ...data, memberId };
    addUserPayment({ ...newData });
    handleCloseModal?.();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow name="purchasedMembershipId" label="Zakupiony karnet">
        <FormOption
          inputName="purchasedMembershipId"
          register={register}
          errors={errors}
        >
          {purchasedMemberships?.map((purchasedMembership) =>
            purchasedMembership.isValid ? (
              <option
                key={purchasedMembership.id}
                value={purchasedMembership.id}
                label={`nr ${purchasedMembership.id}, ${purchasedMembership.gymMembership.gymMembershipName}, data zakupu: ${purchasedMembership.created_at.slice(0, 10)} `}
              />
            ) : (
              ""
            ),
          )}
        </FormOption>
      </FormRow>

      <FormRow name="amount" label="Kwota">
        <FormInput
          errors={errors}
          register={register}
          formType="number"
          inputName="amount"
        ></FormInput>
      </FormRow>

      <ButtonsContainer handleClick={() => handleCloseModal?.()} />
    </Form>
  );
}
