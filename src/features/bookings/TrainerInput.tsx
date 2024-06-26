import { FieldErrors, UseFormRegister } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import FormOption from "../../ui/FormOption";

type TrainersType = {
  id: string;
  name: string;
  category: string;
  price: number;
  phone: string;
  image: any;
}[];

type GroupActivitiesType = {
  date: string;
  id: string;
  name: string;
  numOfPlaces: number;
  trainerId: string;
  trainers: {
    name: string;
  };
}[];

type PropsType = {
  errors: FieldErrors;
  register: UseFormRegister<any>;
  value: string;
  trainerData?: TrainersType;
  groupActivitiesData?: GroupActivitiesType;
};

export default function TrainerInput({
  errors,
  trainerData,
  register,
  value,
  groupActivitiesData,
}: PropsType) {
  return (
    <FormRow name="trainerId" label="Trener:">
      <FormOption errors={errors} inputName="trainerId" register={register}>
        {value === "personalTrainers" &&
          trainerData?.map((el) => (
            <option key={el.id} value={el.id} label={`${el.name}`}>
              {el.name}
            </option>
          ))}

        {value === "groupActivities" &&
          groupActivitiesData?.map((el) => (
            <option
              key={`${el.trainerId}${el.date}`}
              value={`${el.trainerId} ${el.date}`}
              label={`${el.name}: ${el.trainers.name} ${el.date.replace("T", " ").slice(0, -3)}`}
            >
              {el.name}
            </option>
          ))}
      </FormOption>
    </FormRow>
  );
}
