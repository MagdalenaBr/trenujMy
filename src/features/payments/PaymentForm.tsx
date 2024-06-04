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

interface PropsType {
  handleCloseModal?: () => void;
}

export default function PaymentForm({ handleCloseModal }: PropsType) {
  const memberIdParams = useParams();
  const memberId = memberIdParams.memberId as string;
  console.log(memberId);
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
    console.log(typeof data.amount);
    const newData = { ...data, memberId };
    addUserPayment({ ...newData });
    handleCloseModal?.();
  }
console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow name="purchasedMembershipId" label="Zakupiony karnet">
        <input
          list="purchasedMembershipId"
          {...register("purchasedMembershipId")}
          className="col-start-1 col-end-4 h-9 w-80 rounded-md border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800"
        />
        <datalist id="purchasedMembershipId">
          {purchasedMemberships?.map((purchasedMembership) => (
            <option
              key={purchasedMembership.id}
              value={purchasedMembership.id}
              label={`${purchasedMembership.gymMembership.gymMembershipName}, data zakupu: ${purchasedMembership.created_at.slice(0, 10)} `}
            />
          ))}
        </datalist>

        {errors && errors.purchasedMembershipId?.message && (
          <p className="col-start-4 col-end-7">
            {errors.purchasedMembershipId.message?.toString()}
          </p>
        )}
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
