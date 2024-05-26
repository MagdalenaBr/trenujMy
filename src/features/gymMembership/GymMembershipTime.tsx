import { useContext, useEffect } from "react";
import FormInput from "../../ui/FormInput";
import FormRow from "../../ui/FormRow";
import { PurchasedMembershipContext } from "../gymMembership/PurchaseGymMembershipForm";
import { UseFormRegister } from "react-hook-form";
import { DateTime } from "luxon";

export default function MembershipTime() {
  const context = useContext(PurchasedMembershipContext);

  useEffect(() => {
    if (!context?.selectedDate) return;
    const selectedDateArr = context?.selectedDate
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
    if (context?.selectedGymMembership === "1")
      calculateDate = convertedSelectedDate.plus({ day: 1 });
    if (context?.selectedGymMembership === "2")
      calculateDate = convertedSelectedDate.plus({ month: 1 });
    if (context?.selectedGymMembership === "3")
      calculateDate = convertedSelectedDate.plus({ month: 6 });
    if (context?.selectedGymMembership === "4")
      calculateDate = convertedSelectedDate.plus({ year: 1 });

    const receivedDay = calculateDate?.toISO()?.slice(0, 19);
    context?.setCalculatedDate(receivedDay as string);
  }, [context?.selectedDate, context?.selectedGymMembership, context]);

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    context?.setSelectedDate(e.target.value);
  }
  return (
    <>
      <FormRow name="startDay" label="Data rozpoczęcia karnetu">
        <FormInput
          errors={context?.errors}
          inputName="startDay"
          register={context?.register as UseFormRegister<any>}
          formType="datetime-local"
          onChange={handleDateChange}
        />
      </FormRow>
      <FormRow name="endDay" label="Data zakończenia karnetu">
        <FormInput
          errors={context?.errors}
          inputName="endDay"
          register={context?.register as UseFormRegister<any>}
          formType="datetime-local"
          readOnly={true}
        />
      </FormRow>
    </>
  );
}
