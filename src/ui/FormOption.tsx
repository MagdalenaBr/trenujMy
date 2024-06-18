import { FieldErrors, UseFormRegister } from "react-hook-form";

type PropsType = {
  errors?: FieldErrors;
  inputName: string;
  register: UseFormRegister<any>;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode
};

function FormOption({
  errors,
  inputName,
  register,
  onChange,
  children
}: PropsType) {

  console.log(errors);

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
        <option value=''></option>
        {children}
       
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
