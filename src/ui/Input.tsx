import { FieldErrors, UseFormRegister } from "react-hook-form";

export default function Input({
  label,
  type,
  id,
  register,
  errors,
  disabled,
  value,
  autocomplete,
  onChange,
}: {
  label: string;
  id: string;
  type: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors;
  disabled?: boolean;
  value?: string;
  autocomplete?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {

  console.log(id);
  return (
    <div className="flex grid-cols-[2fr_5fr_3fr]  flex-col py-4 xl:grid">
      <label htmlFor={id} className="text-start text-lg">
        {label}:
      </label>
      <input
        {...register(id)}
        id={id}
        type={type}
        value={value}
        disabled={disabled}
        autoComplete={autocomplete}
        onChange={onChange}
        className={`${disabled === true ? " border-none outline-none" : " border-accentColor1"} w-full self-start border bg-serchInputBg px-2 py-1 text-textLightMode pr-2 focus:text-slate-900 focus:border-slate-300 focus:bg-slate-300  focus:shadow-md focus:outline-none md:w-5/6`}
      />
      {errors && errors[id]?.message && (
        <p className="text-end text-[12px] text-red-500 md:text-sm">
          {errors[id]?.message?.toString()}
        </p>
      )}
    </div>
  );
}
