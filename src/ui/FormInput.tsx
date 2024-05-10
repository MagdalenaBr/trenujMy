import { UseFormRegister, FieldErrors } from "react-hook-form";

type PropsType = {
  errors?: FieldErrors;
  formType: string;
  register: UseFormRegister<any>;
  inputName: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean
};

function FormInput({
  errors,
  inputName,
  register,
  formType,
  onChange,
  readOnly
}: PropsType) {
  return (
    <>
      <input
        type={formType}
        id={inputName}
        readOnly={readOnly}
        {...register(inputName)}
        className="col-start-1 col-end-4 h-9 w-80 rounded-md border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800"
        onChange={(e) => {
          if (!onChange) return;
          onChange(e);
        }}
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
