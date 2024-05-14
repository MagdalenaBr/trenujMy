import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import ButtonsContainer from "../../ui/ButtonsContainer";
import Form from "../../ui/Form";
import { useMembers } from "../members/useMembers";
import { useGymMembership } from "../gymMembership/useGymMembership";
import FormOption from "../../ui/FormOption";
import FormRow from "../../ui/FormRow";
import { DateTime } from "luxon";
import { createContext, useState } from "react";
import { useAddPaymets } from "./useAddPayments";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/PaymentValidation";
import GymMembershipMember from "./GymMembershipMember";
import GymMembershipTime from "./GymMembershipTime";

interface PropsType {
  handleCloseModal?: () => void;
  isMemberPage?: boolean;
  activeMemberData?: {
    id: string;
    city: string;
    email: string;
    gender: string;
    name: string;
    phone: string;
  };
}
interface gymMembershipType {
  memberId: string;
  gymMembershipId: string;
  startDay: string;
  endDay: string;
}

interface ContextTypes {
  register: UseFormRegister<any>;
  members:
    | {
        city: string;
        email: string;
        gender: string;
        name: string;
        phone: string;
      }[]
    | undefined;
  errors: FieldErrors;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  setCalculatedDate: React.Dispatch<React.SetStateAction<string>>;
  selectedDate: string;
  selectedGymMembership: string;
}

export const PurchasedMembershipContext = createContext<
  ContextTypes | undefined
>(undefined);

export default function AddPaymentForm({
  handleCloseModal,
  isMemberPage,
  activeMemberData,
}: PropsType) {
  const todayDay = DateTime.now();
  const todayDayString = todayDay.toISO().slice(0, 16);
  const { members } = useMembers();
  const { gymMembership } = useGymMembership();
  const { addPayment } = useAddPaymets();

  const [calculatedDate, setCalculatedDate] = useState(
    todayDay.plus({ day: 1 }).toISO().slice(0, 16),
  );
  const [selectedGymMembership, setSelectedGymMembership] = useState("");
  const [selectedDate, setSelectedDate] = useState(todayDayString);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      startDay: todayDayString,
    },
    values: !isMemberPage
      ? ({ endDay: calculatedDate } as gymMembershipType)
      : ({
          memberId: activeMemberData?.id,
          endDay: calculatedDate,
        } as gymMembershipType),
    resolver: yupResolver(schema),
  });

  function onSubmit(data: gymMembershipType) {
    let newData;
    if (!isMemberPage) {
      const memberName = data.memberId.split(" ").slice(0, 2).join(" ");
      const memberConvertedToId = members?.filter(
        (member) => member.name === memberName,
      )[0].id;
      newData = { ...data, memberId: memberConvertedToId };
    }
    if (isMemberPage) newData = { ...data, memberId: activeMemberData?.id };

    addPayment(
      newData as {
        endDay: string;
        gymMembershipId: string;
        memberId: string;
        startDay: string;
      },
    );
    handleCloseModal?.();
  }

  function handleMembershipChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedGymMembership(e.target.value);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <PurchasedMembershipContext.Provider
        value={{
          register,
          members,
          errors,
          setSelectedDate,
          selectedDate,
          selectedGymMembership,
          setCalculatedDate,
        }}
      >
        {!isMemberPage ? (
          <GymMembershipMember />
        ) : (
          <p className="text-md align-self-center   border-slate-400 py-1 text-center font-bold uppercase">
            {activeMemberData?.name}
          </p>
        )}
        <FormRow name="gymMembershipId" label="Rodzaj karnetu">
          <FormOption
            errors={errors}
            inputName="gymMembershipId"
            register={register}
            value="gymMembership"
            gymMembershipData={gymMembership}
            onChange={handleMembershipChange}
          />
        </FormRow>
        <GymMembershipTime />
      </PurchasedMembershipContext.Provider>

      <ButtonsContainer handleClick={() => handleCloseModal?.()} />
    </Form>
  );
}
