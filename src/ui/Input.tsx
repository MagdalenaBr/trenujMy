import { FieldErrors, UseFormRegister } from "react-hook-form";

export default function Input({
  label,
  type,
  id,
  register,
  errors,
  disabled,
  value,

}: {
  label: string;
  id: string;
  type: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors;
  disabled?: boolean;
  value?: string;

}) {
  return (
    <div className="grid grid-cols-[2fr_5fr_2fr] py-4">
      <label htmlFor={id} className="text-start text-lg">
        {label}:
      </label>
      <input
        {...register(id)}
        id={id}
        type={type}
        value={value}
        disabled={disabled}
        className={`${disabled === true ? " border-none outline-none" : " border-accentColor1"} w-5/6 self-start rounded-lg border-2 bg-serchInputBg px-2 py-1 pr-2 text-slate-300 focus:border-slate-300 focus:bg-slate-300 focus:text-slate-800 focus:shadow-md focus:outline-none`}
      />
      {errors && errors[id]?.message && (
        <p className="text-start">{errors[id]?.message?.toString()}</p>
      )}
    </div>
  );
}
