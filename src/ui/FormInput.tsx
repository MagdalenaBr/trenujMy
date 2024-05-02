import { UseFormRegister, FieldErrors } from "react-hook-form";

type PropsType = {
  errors?: FieldErrors;
  formType: string;
  register: UseFormRegister<any>;
  inputName: string;
};

function FormInput({ errors, inputName, register, formType }: PropsType) {
  return (
    <>
      <input
        type={formType}
        id={inputName}
        {...register(inputName)}
        className="col-start-1 col-end-4 h-9 w-80 rounded-md border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800"
      />
      {errors && errors[inputName]?.message && (
        <p className="col-start-4 col-end-7">
          {errors[inputName]?.message?.toString()}
        </p>
      )}
    </>
  );
}

export default FormInput;
