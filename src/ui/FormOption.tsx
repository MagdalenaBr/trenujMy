import { FieldErrors, UseFormRegister } from "react-hook-form";

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
  errors?: FieldErrors;
  inputName: string;
  register: UseFormRegister<any>;
  value: string;
  memberId?: string;
  memberName?: string;
  member?: {
    id?: string;
    name: string;
    email: string;
    phone: string;
    gender: string;
    city: string;
    startGymMembership?: string | null;
    endGymMembership?: string | null;
    gymMembershipType?: string | null;
  };
  trainerData?: TrainersType;
  groupActivitiesData?: GroupActivitiesType;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function FormOption({
  errors,
  inputName,
  register,
  member,
  value,
  memberId,
  memberName,
  trainerData,
  groupActivitiesData,
  onChange,
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
        className="col-start-1 col-end-4 h-9 w-80 rounded-md border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800 disabled:font-bold disabled:bg-slate-300 disabled:outline-none disabled:border-none"
        onChange={(e) => {
          if (!onChange) return;
          onChange(e);
        }}
        disabled={value === "members"}
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
        {value === "groupActivities" && (
          <>
            <option value=""></option>
            {groupActivitiesData?.map((el) => (
              <option
                key={`${el.trainerId}${el.date}`}
                value={`${el.trainerId} ${el.date}`}
                label={`${el.name}: ${el.trainers.name} ${el.date.replace("T", " ").slice(0, -3)}`}
              >
                {el.name}
              </option>
            ))}
          </>
        )}
        {value === "members" && (
          <option
            key={member ? member.id : memberId}
            value={member ? member.id : memberId}
            label={member ? member.name : memberName}
          ></option>
        )}
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
