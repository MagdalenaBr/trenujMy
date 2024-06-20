import { useContext } from "react"
import { BookingFormContext } from "./AddBookingForm"
import FormRow from "../../ui/FormRow";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export default function DateInput({register, errors}:{
    errors: FieldErrors;
    register: UseFormRegister<any>;
  }) {

    const bookingContext = useContext(BookingFormContext);
    return <>{bookingContext?.activitiesType !== "groupActivities" ? (
        <FormRow name="date" label="Data">
          <input
            type="datetime-local"
            id="date"
            {...register("date", {required:"Wybierz datę"})}
            className="col-start-1 col-end-4 h-9 w-80  border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800"
          />
          {errors.date?.message && (
            <p className="col-start-4 col-end-7">
              {errors.date?.message?.toString()}
            </p>
          )}
        </FormRow>
      ) : (
        /* if group activities display data from chosen trainer input */
        <div className="grid grid-cols-4 items-center py-4 font-semibold">
          <p>Data</p>
          <div className=" col-start-2 col-end-5 grid grid-cols-6 gap-3">
            <p className="text-md align-self-center col-start-1 col-end-4  text-center font-normal">
              {bookingContext.bookingDate ? bookingContext.bookingDate.replace("T", " ") : "-"}
            </p>
          </div>
        </div>
      )}</>
}