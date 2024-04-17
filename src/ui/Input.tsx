import { FieldErrors, UseFormRegister } from "react-hook-form";

export default function Input({
  label,
  type,
  id,
  register,
  errors,
}: {
  label: string;
  id: string;
  type: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors;
}) {
  return (
    <div className="grid grid-cols-[2fr_5fr_2fr] py-4">
      <label htmlFor={id} className="text-lg text-start">
        {label}:
      </label>
      <input
        {...register(id)}
        id={id}
        type={type}
        className="w-5/6 rounded-lg border-2 border-violet-300 bg-serchInputBg px-2 py-1 pr-2 text-slate-900 focus:border-slate-300 self-start focus:bg-slate-300 focus:text-slate-800 focus:shadow-md focus:outline-none"
      />
      {errors && errors[id]?.message && (
        <p className="text-start">{errors[id]?.message?.toString()}</p>
      )}
    </div>
  );
}
