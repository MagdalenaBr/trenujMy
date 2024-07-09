import { UseFormRegister, FieldErrors } from "react-hook-form";

type PropsType = {
  errors?: FieldErrors;
  formType: string;
  register: UseFormRegister<any>;
  inputName: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  value?: string;
  placecholder?: string;
};

function FormInput({
  errors,
  inputName,
  register,
  formType,
  onChange,
  readOnly,
  value,
  placecholder,
}: PropsType) {
  return (
    <div className="grid">
      <input
        type={formType}
        id={inputName}
        placeholder={placecholder}
        defaultValue={value}
        readOnly={readOnly}
        {...register(inputName)}
        className="col-span-2 h-9 border-b-2 border-r-2 border-slate-600 bg-slate-700 px-2 text-sm font-semibold  tracking-wider text-textLight placeholder:text-textLight focus:bg-slate-400 focus:text-textDark focus:outline-none focus:ring-1 focus:ring-slate-400 md:w-[26rem]"
        onChange={(e) => {
          if (!onChange) return;
          onChange(e);
        }}
      />
      {errors && errors[inputName]?.message ? (
        <p className="col-span-2 my-1 h-6  text-end text-[12px]  text-red-500 md:text-sm">
          {errors[inputName]?.message?.toString()}
        </p>
      ) : (
        <p className=" my-1 h-6"></p>
      )}
    </div>
  );
}

export default FormInput;
