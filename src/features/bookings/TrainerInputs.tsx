import { useContext } from "react";
import { useSchedules } from "../schedule/useSchedules";
import { useTrainers } from "../trainer/useTrainers";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { BookingFormContext } from "./AddBookingForm";
import TrainerInput from "./TrainerInput";

export default function TrainerInputs({
  errors,
  register,
}: {
  errors: FieldErrors;
  register: UseFormRegister<any>;
}) {
  const { trainers } = useTrainers();
  const bookingContext = useContext(BookingFormContext);

  const { schedule: groupActivities } = useSchedules("currentSchedule");

  const personalTrainer = trainers?.filter(
    (trainer) => trainer.category === "trener personalny",
  );

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    bookingContext?.setBookingDate(e.target.value.split(" ")[1]);
  }

  return (
    <>
      <div className="flex  gap-11 py-4">
        <div>
          <input
            type="radio"
            name="activitiesType"
            id="group"
            defaultChecked={
              bookingContext?.activitiesType !== "personalTrainer"
            }
            onChange={() =>
              bookingContext?.setActivitiesType("groupActivities")
            }
            disabled={
              bookingContext?.isEditingSession &&
              bookingContext?.activitiesType !== "groupActivities"
            }
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
            defaultChecked={
              bookingContext?.activitiesType === "personalTrainer"
            }
            onChange={() =>
              bookingContext?.setActivitiesType("personalTrainer")
            }
            disabled={
              bookingContext?.isEditingSession &&
              bookingContext?.activitiesType !== "personalTrainer"
            }
          />
          <label htmlFor="trainer" className="pl-2 font-semibold uppercase">
            Trener personalny
          </label>
        </div>
      </div>

      {bookingContext?.activitiesType == "personalTrainer" && (
        <TrainerInput
          errors={errors}
          register={register}
          trainerData={personalTrainer}
          value="personalTrainers"
        />
      )}

      {bookingContext?.activitiesType == "groupActivities" && (
        <TrainerInput
          errors={errors}
          register={register}
          groupActivitiesData={groupActivities}
          value="groupActivities"
          onChange={handleChange}
        />
      )}
    </>
  );
}
