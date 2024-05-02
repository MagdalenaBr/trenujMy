import { FieldErrors, UseFormRegister } from "react-hook-form";

type TrainersType = {
  id: string;
  name: string;
  category: string;
  price: number;
  phone: string;
  image: any;
}[];


type PropsType = {
  errors?: FieldErrors;
  inputName: string;
  register: UseFormRegister<any>;
  value: string;
  trainerData?: TrainersType;
};

function FormOption({
  errors,
  inputName,
  register,
  value,
  trainerData,
}: PropsType) {
  const typesOfActivities = trainerData?.map((el) => el.category);
  const uniqueTypesOfActivities = [...new Set(typesOfActivities)].filter(
    (el) => el !== "trener personalny",
  );

  return (
    <>
      <select
        id={inputName}
        {...register(inputName)}
        className="col-start-1 col-end-4 h-9 w-80 rounded-md border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800 disabled:border-none disabled:bg-slate-300 disabled:font-bold disabled:outline-none"

      >
        {value === "typeOfActivities" && (
          <>
            <option value=""></option>
            {uniqueTypesOfActivities?.map((category) => (
              <option key={category} value={category} label={category}></option>
            ))}
          </>
        )}
      </select>
      {errors && errors[inputName]?.message && (
        <p className="col-start-4 col-end-7">
          {errors[inputName]?.message?.toString()}
        </p>
      )}
    </>
  );
}

export default FormOption;
