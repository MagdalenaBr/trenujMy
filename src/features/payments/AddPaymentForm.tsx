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
import MembershipTime from "./MembershipTime";

interface PropsType {
  handleCloseModal?: () => void;
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
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>,
  setCalculatedDate: React.Dispatch<React.SetStateAction<string>>,
  selectedDate: string;
  selectedGymMembership: string;
}

export const PurchasedMembershipContext = createContext<
  ContextTypes | undefined
>(undefined);

export default function AddPaymentForm({ handleCloseModal }: PropsType) {
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
      memberId: "",
      gymMembershipId: "",
      startDay: todayDayString,
    },
    values: { endDay: calculatedDate } as gymMembershipType,
    resolver: yupResolver(schema),
  });

  function onSubmit(data: gymMembershipType) {
    const memberName = data.memberId.split(" ").slice(0, 2).join(" ");
    const memberConvertedToId = members?.filter(
      (member) => member.name === memberName,
    )[0].id;
    const newData = { ...data, memberId: memberConvertedToId };

    addPayment(newData);
  }

  function handleMembershipChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedGymMembership(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <PurchasedMembershipContext.Provider
        value={{ register, members, errors, setSelectedDate, selectedDate, selectedGymMembership, setCalculatedDate }}
      >
        <GymMembershipMember />
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
        <MembershipTime/>
      </PurchasedMembershipContext.Provider>

      <ButtonsContainer handleClick={() => handleCloseModal?.()} />
    </Form>
  );
}
