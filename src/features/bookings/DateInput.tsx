import { FieldErrors, UseFormRegister } from "react-hook-form";
import FormRow from "../../ui/FormRow";

export default function DateInput({
  register,
  errors,
}: {
  errors: FieldErrors;
  register: UseFormRegister<any>;
}) {
  return (
    <>
      <FormRow name="date" label="Data:">
        <input
          type="datetime-local"
          id="date"
          {...register("date", { required: "Wybierz datę." })}
          className="col-span-2 h-9 border-slate-600 bg-serchInputBg px-2   text-sm font-semibold tracking-wider  text-textLightMode shadow-sm  shadow-slate-900  placeholder:text-textLight  focus:border-slate-300 focus:bg-slate-300 focus:text-textDark focus:shadow-md focus:outline-none focus:ring-1  focus:ring-slate-400 md:w-[26rem] "
        />
        {errors.date?.message ? (
          <p className="col-span-2  my-1 h-6  text-end text-red-500">
            {errors.date?.message?.toString()}
          </p>
        ) : (
          <p className=" my-1 h-6"></p>
        )}
      </FormRow>
    </>
  );
}
