import { FieldErrors, UseFormRegister } from "react-hook-form";

type PropsType = {
  errors?: FieldErrors;
  inputName: string;
  register: UseFormRegister<any>;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
};

function FormOption({
  errors,
  inputName,
  register,
  onChange,
  children,
}: PropsType) {
  return (
    <>
      <select
        id={inputName}
        {...register(inputName)}
        className="
        col-span-2 h-9 w-48   border-b-2 border-r-2 border-slate-600 bg-slate-700 px-2  text-sm font-semibold tracking-wider text-textLight focus:bg-slate-400 focus:text-textDark disabled:border-none disabled:bg-slate-300 disabled:font-bold disabled:outline-none md:w-[26rem]"
        onChange={(e) => {
          if (!onChange) return;
          onChange(e);
        }}
      >
        <option value="" hidden></option>
        {children}
      </select>
      {errors && errors[inputName]?.message ? (
        <p className="col-span-2 my-1 h-6  text-end text-[12px]  text-red-500 md:text-sm">
          {errors[inputName]?.message?.toString()}
        </p>
      ) : (
        <p className=" my-1 h-6"></p>
      )}
    </>
  );
}

export default FormOption;
