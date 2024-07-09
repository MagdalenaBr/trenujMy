import { FieldErrors, UseFormRegister } from "react-hook-form";
import { useSchedules } from "../schedule/useSchedules";
import { useTrainers } from "../trainer/useTrainers";
import TrainerInput from "./TrainerInput";

export default function TrainerInputs({
  errors,
  register,
  typeOfActivities,
}: {
  errors: FieldErrors;
  register: UseFormRegister<any>;
  typeOfActivities: string;
}) {
  const { trainers } = useTrainers();
  const { schedule: groupActivities } = useSchedules("currentSchedule");
  const personalTrainer = trainers?.filter(
    (trainer) => trainer.category === "trener personalny",
  );

  return (
    <>
      {typeOfActivities == "personalTrainer" && (
        <TrainerInput
          errors={errors}
          register={register}
          trainerData={personalTrainer}
          value="personalTrainers"
        />
      )}

      {typeOfActivities == "groupActivities" && (
        <TrainerInput
          errors={errors}
          register={register}
          groupActivitiesData={groupActivities}
          value="groupActivities"
        />
      )}
    </>
  );
}
