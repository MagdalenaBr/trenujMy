import { useForm } from "react-hook-form";
import ButtonsContainer from "../../ui/ButtonsContainer";
import Form from "../../ui/Form";
import { useMembers } from "../members/useMembers";
import { useGymMembership } from "../gymMembership/useGymMembership";
import FormOption from "../../ui/FormOption";
import FormRow from "../../ui/FormRow";
import FormInput from "../../ui/FormInput";

import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useAddPaymets } from "./useAddPayments";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/PaymentValidation";

interface PropsType {
  handleCloseModal?: () => void;
}
interface gymMembershipType {
  memberId: string;
  gymMembershipId: string;
  startDay: string;
  endDay: string;
}

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
  useEffect(() => {
    if (!selectedDate) return;
    const selectedDateArr = selectedDate
      .replace("T", "-")
      .replace(":", "-")
      .split("-");

    const convertedSelectedDate = DateTime.fromObject({
      year: +selectedDateArr[0],
      month: +selectedDateArr[1],
      day: +selectedDateArr[2],
      hour: +selectedDateArr[3],
      minute: +selectedDateArr[4],
    });

    let calculateDate;
    if (selectedGymMembership === "1")
      calculateDate = convertedSelectedDate.plus({ day: 1 });
    if (selectedGymMembership === "2")
      calculateDate = convertedSelectedDate.plus({ month: 1 });
    if (selectedGymMembership === "3")
      calculateDate = convertedSelectedDate.plus({ month: 6 });
    if (selectedGymMembership === "4")
      calculateDate = convertedSelectedDate.plus({ year: 1 });

    const receivedDay = calculateDate?.toISO()?.slice(0, 19);
    setCalculatedDate(receivedDay as string);
  }, [selectedDate, selectedGymMembership]);

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedDate(e.target.value);
  }

  function handleMembershipChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedGymMembership(e.target.value);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* <FormRow name="member" label="Klient">
        <input
          list="member"
          {...register("memberId")}
          className="col-start-1 col-end-4 h-9 w-80 rounded-md border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800"
        />
        <datalist id="member">
          {members?.map((member) => (
            <option
              key={member.phone}
              value={`${member.name} ${member.phone}`}
            />
          ))}
        </datalist>

        {errors && errors.memberId?.message && (
          <p className="col-start-4 col-end-7">
            {errors.memberId.message?.toString()}
          </p>
        )}
      </FormRow> */}
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

      <FormRow name="startDay" label="Data rozpoczęcia karnetu">
        <FormInput
          errors={errors}
          inputName="startDay"
          register={register}
          formType="datetime-local"
          onChange={handleDateChange}
        />
      </FormRow>
      <FormRow name="endDay" label="Data zakończenia karnetu">
        <FormInput
          errors={errors}
          inputName="endDay"
          register={register}
          formType="datetime-local"
          readOnly={true}
        />
      </FormRow>

      <ButtonsContainer handleClick={() => handleCloseModal?.()} />
    </Form>
  );
}
