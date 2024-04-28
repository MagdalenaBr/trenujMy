import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useCreateBooking } from "./useCreateBooking";
import { useEditBooking } from "./useEditBooking";
import { schema } from "../../validation/BookingValidation";
import FormOption from "../../ui/FormOption";
import FormInput from "../../ui/FormInput";
import FormRow from "../../ui/FormRow";
import StyledButton from "../../ui/StyledButton";
import { useTrainers } from "../trainer/useTrainers";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import { useSchedules } from "../schedule/useSchedules";

interface CommonDataTypes {
  status: string;
  trainerId: number;
  memberId: number;
  date: string;
}
interface BookingTypes extends CommonDataTypes {
  created_at: string;
  id: number;
  trainers: {
    name: string;
    category: string;
  };
  members: {
    name: string;
    phone: string;
  };
}

interface ActiveMemberType {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  city: string;
  startGymMembership?: string | null;
  endGymMembership?: string | null;
  gymMembershipType?: string | null;
}
interface PropsType {
  handleCloseModal?: () => void;
  booking?: BookingTypes;
  activeMember?: ActiveMemberType;
  memberId?: number;
  memberName?: string;
}

function AddBookingForm({
  booking = {} as BookingTypes,
  handleCloseModal,
  activeMember,
  memberId,
  memberName,
}: PropsType) {
  const { id, ...bookingsEditData } = booking;
  const [activitiesType, setActivitiesType] = useState(
    bookingsEditData.trainers.category === "trener personalny"
      ? "personalTrainer"
      : "groupActivities",
  );

  console.log(activitiesType);
  const { createBooking } = useCreateBooking();
  const { editBooking } = useEditBooking();
  const { trainers, trainerIsLoading } = useTrainers();
  const { schedule: groupActivities } = useSchedules("currentSchedule");

  console.log(bookingsEditData.trainers.category);

  const isEditingSession = Boolean(id);
  const personalTrainer = trainers?.filter(
    (trainer) => trainer.category === "trener personalny",
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: isEditingSession ? bookingsEditData : {},
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: CommonDataTypes) => {
    if (isEditingSession) {
      editBooking({ newBooking: data, id });
    } else {
      createBooking(data);
    }
    handleCloseModal?.();
  };

  if (trainerIsLoading) return <Spinner />;
  return (
    <div className="rounded-md bg-neutral-100 px-10 py-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mx-auto flex flex-col divide-y py-8 "
      >
        <FormRow name="memberId" label="Imię i nazwisko">
          <FormOption
            value={`members`}
            member={activeMember}
            memberId={memberId}
            memberName={memberName}
            errors={errors}
            inputName="memberId"
            register={register}
          />
        </FormRow>
        <div className="flex w-3/4 justify-center gap-11">
          <div>
            <input
              type="radio"
              name="activitiesType"
              id="group"
              defaultChecked={activitiesType !== "personalTrainer"}
              onChange={() => setActivitiesType("groupActivities")}
            />
            <label htmlFor="group" className="pl-2 font-semibold uppercase">
              Zajęcia grupowe
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="activitiesType"
              id="trainer"
              onChange={() => setActivitiesType("personalTrainer")}
              defaultChecked={activitiesType === "personalTrainer"}
            />
            <label htmlFor="trainer" className="pl-2 font-semibold uppercase">
              Trener personalny
            </label>
          </div>
        </div>
        {activitiesType == "personalTrainer" && (
          <FormRow name="trainerId" label="Trener">
            <FormOption
              value="trainers"
              trainerData={personalTrainer}
              errors={errors}
              inputName="trainerId"
              register={register}
            />
          </FormRow>
        )}
        {activitiesType == "groupActivities" && (
          <FormRow name="trainerId" label="Trener">
            <FormOption
              value="groupActivities"
              groupActivitiesData={groupActivities}
              errors={errors}
              inputName="trainerId"
              register={register}
            />
          </FormRow>
        )}
        <FormRow name="date" label="Data">
          <FormInput
            errors={errors}
            inputName="date"
            register={register}
            formType="datetime-local"
          />
        </FormRow>
        <FormRow name="status" label="Status">
          <select
            id="status"
            {...register("status")}
            className="col-start-1 col-end-4 h-9 w-80 rounded-md border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800"
          >
            <option value=""></option>
            <option value="zrealizowana">zrealizowana</option>
            <option value="niepotwierdzona">niepotwierdzona</option>
            <option value="anulowana">anulowana</option>
          </select>
          {errors.status?.message && (
            <p className="col-start-4 col-end-7">
              {errors.status.message.toString()}
            </p>
          )}
        </FormRow>

        <div className="flex justify-end gap-4 pt-4">
          <StyledButton
            styleType="close"
            type="reset"
            handleClick={() => handleCloseModal?.()}
          >
            Anuluj
          </StyledButton>
          <StyledButton styleType="add">
            {isEditingSession ? "Zmień" : "Dodaj"}
          </StyledButton>
        </div>
      </form>
    </div>
  );
}

export default AddBookingForm;
