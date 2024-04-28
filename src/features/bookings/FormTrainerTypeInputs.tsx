import { useState } from "react";
import { useSchedules } from "../schedule/useSchedules";
import { useTrainers } from "../trainer/useTrainers";
import FormOption from "../../ui/FormOption";
import FormRow from "../../ui/FormRow";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface BookingsType {
  created_at: string;
  trainers: {
    name: string;
    category: string;
  };
  members: {
    name: string;
    phone: string;
  };
  status: string;
  trainerId: number;
  memberId: number;
  date: string;
}

export default function FormTrainerTypeInputs({
  bookingsEditData,
  errors,
  register,
}: {
  bookingsEditData: BookingsType;
  errors: FieldErrors;
  register: UseFormRegister<any>;
}) {
  const { trainers } = useTrainers();

  const [activitiesType, setActivitiesType] = useState(
    bookingsEditData.trainers?.category === "trener personalny"
      ? "personalTrainer"
      : "groupActivities",
  );
  const { schedule: groupActivities } = useSchedules("currentSchedule");

  const personalTrainer = trainers?.filter(
    (trainer) => trainer.category === "trener personalny",
  );
  return (
    <>
      <div className="flex  gap-11 py-4">
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
    </>
  );
}
