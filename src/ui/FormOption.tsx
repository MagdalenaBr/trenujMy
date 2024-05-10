import { FieldErrors, UseFormRegister } from "react-hook-form";

type TrainersType = {
  id: string;
  name: string;
  category: string;
  price: number;
  phone: string;
  image: any;
}[];
type gymMembershipType = {
  created_at: string;
  gymMembershipName: string;
  id: string;
  price: string;
}[];

type PropsType = {
  errors?: FieldErrors;
  inputName: string;
  register: UseFormRegister<any>;
  value: string;
  trainerData?: TrainersType;
  gymMembershipData?: gymMembershipType;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function FormOption({
  errors,
  inputName,
  register,
  value,
  trainerData,
  gymMembershipData,
  onChange
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
        onChange={(e) => {
          if (!onChange) return;
          onChange(e);
        }}
      >
        {value === "trainers" && (
          <>
            <option value=""></option>
            {trainerData?.map((el) => (
              <option
                key={el.id}
                value={el.id}
                label={`${el.name} ${el.phone}`}
              >
                {el.name}
              </option>
            ))}
          </>
        )}
        {value === "typeOfActivities" && (
          <>
            <option value=""></option>
            {uniqueTypesOfActivities?.map((category) => (
              <option key={category} value={category} label={category}></option>
            ))}
          </>
        )}
        {value === "gymMembership" && (
          <>
           <option value=""></option>
            {gymMembershipData?.map((membership) => (
              <option
                key={membership.gymMembershipName}
                value={membership.id}
                label={membership.gymMembershipName}
                defaultValue={membership.id}
              />
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
