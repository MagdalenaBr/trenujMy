import { FieldErrors, UseFormRegister } from "react-hook-form";
import FormRow from "../../ui/FormRow";

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
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function TrainerInput({
  errors,
  trainerData,
  register,
  value,
  groupActivitiesData,
  onChange
}: PropsType) {
  return (
    <FormRow name="trainerId" label="Trener">
      <select
        id="trainerId"
        {...register("trainerId", { required: "Wybierz trenera." })}
        className="col-start-1 col-end-4 h-9 w-80  border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800 disabled:border-none disabled:bg-slate-300 disabled:font-bold disabled:outline-none"
        onChange={(e) => {
          if (!onChange) return;
          onChange(e);
        }}
      >
        <option value=""></option>

        {value === "personalTrainers" &&
          trainerData?.map((el) => (
            <option key={el.id} value={el.id} label={`${el.name} ${el.phone}`}>
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
      </select>

      {errors.trainerId?.message && (
        <p className="col-start-4 col-end-7">
          {errors.trainerId.message?.toString()}
        </p>
      )}
    </FormRow>
  );
}
