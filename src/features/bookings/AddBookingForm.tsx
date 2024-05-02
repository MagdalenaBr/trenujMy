import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateBooking } from "./useCreateBooking";
import { useEditBooking } from "./useEditBooking";
import { schema } from "../../validation/BookingValidation";
import FormInput from "../../ui/FormInput";
import FormRow from "../../ui/FormRow";
import StyledButton from "../../ui/StyledButton";
import FormTrainerTypeInputs from "./FormTrainerTypeInputs";
import { useTrainers } from "../trainer/useTrainers";
import Spinner from "../../ui/Spinner";
import { useSchedules } from "../schedule/useSchedules";
import { createContext, useState } from "react";

interface CommonDataTypes {
  status: string;
  trainerId: string;
  memberId: string;
  date: string;
}
interface BookingTypes extends CommonDataTypes {
  created_at: string;
  id: string;
  trainers: {
    name: string;
    category: string;
  };
  members: {
    name: string;
    phone: string;
  };
}

interface PropsType {
  handleCloseModal?: () => void;
  booking?: BookingTypes;
  memberIdNumber: string;
  memberName: string;
}

interface ContextTypes {
  activitiesType: string;
  setActivitiesType: React.Dispatch<React.SetStateAction<string>>;
  setBookingDate: React.Dispatch<React.SetStateAction<string>>;
  isEditingSession: boolean;
}

export const BookingFormContext = createContext<ContextTypes | undefined>(
  undefined,
);

function AddBookingForm({
  booking = {} as BookingTypes,
  handleCloseModal,
  memberIdNumber,
  memberName,
}: PropsType) {
  const { id, ...bookingsEditData } = booking;
  const { createBooking } = useCreateBooking();
  const { editBooking } = useEditBooking();
  const { trainerIsLoading } = useTrainers();
  const { scheduleIsLoading } = useSchedules("currentSchedule");
  const isEditingSession = Boolean(id);
  const [activitiesType, setActivitiesType] = useState(
    bookingsEditData.trainers?.category === "trener personalny"
      ? "personalTrainer"
      : "groupActivities",
  );

  const [bookingDate, setBookingDate] = useState(
    isEditingSession ? bookingsEditData.date : "",
  );

  /// in case group activities adding to trainerId date, that in booking form (edit existing booking) properly displaying trainer name and data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: isEditingSession
      ? activitiesType !== "groupActivities"
        ? bookingsEditData
        : {
            ...bookingsEditData,
            trainerId: `${bookingsEditData.trainerId} ${bookingsEditData.date}`,
          }
      : {},
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const onSubmit = (data: CommonDataTypes) => {
    const { date, status, trainerId } = data;
    //removing date from trainerId value
    const trainerIdNum = trainerId.split(" ")[0];

    let newBookingData;
    if (activitiesType === "groupActivities") {
      newBookingData = {
        date: trainerId.split(" ")[1],
        memberId: memberIdNumber,
        status,
        trainerId: trainerIdNum,
      };
    } else {
      newBookingData = {
        date,
        memberId: memberIdNumber,
        status,
        trainerId: trainerIdNum,
      };
    }

    if (isEditingSession) {
      editBooking({ newBooking: newBookingData, id });
    } else {
      createBooking(newBookingData);
    }
    handleCloseModal?.();
  };

  if (trainerIsLoading || scheduleIsLoading) return <Spinner />;
  return (
    <div className="rounded-md bg-slate-300 px-10 py-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mx-auto flex flex-col divide-y divide-slate-400/30 py-8"
      >
        <BookingFormContext.Provider
          value={{
            activitiesType,
            setActivitiesType,
            setBookingDate,
            isEditingSession,
          }}
        >
          <p className="text-md align-self-center   border-slate-400 py-1 text-center font-bold uppercase">
            {memberName}
          </p>

          <FormTrainerTypeInputs errors={errors} register={register} />

          {activitiesType !== "groupActivities" ? (
            <FormRow name="date" label="Data">
              <FormInput
                errors={errors}
                inputName="date"
                register={register}
                formType="datetime-local"
              />
            </FormRow>
          ) : (
            /* if group activities display data from chosen trainer input */
            <div className="grid grid-cols-4 items-center py-4 font-semibold">
              <p>Data</p>
              <div className=" col-start-2 col-end-5 grid grid-cols-6 gap-3">
                <p className="text-md align-self-center col-start-1 col-end-4  text-center font-normal">
                  {bookingDate ? bookingDate.replace("T", " ") : "-"}
                </p>
              </div>
            </div>
          )}
          <FormRow name="status" label="Status">
            <select
              id="status"
              {...register("status")}
              className="col-start-1 col-end-4 h-9 w-80 rounded-md border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800"
            >
              <option value=""></option>
              <option value="zrealizowana">zrealizowana</option>
              <option value="niepotwierdzona">niepotwierdzona</option>
              <option value="anulowana">anulowana</option>
            </select>
            {errors.status?.message && (
              <p className="col-start-4 col-end-7">
                {errors.status.message.toString()}
              </p>
            )}
          </FormRow>
          <div className="flex justify-end gap-4 pt-4">
            <StyledButton
              styleType="close"
              type="reset"
              handleClick={() => handleCloseModal?.()}
            >
              Anuluj
            </StyledButton>
            <StyledButton styleType="add">
              {isEditingSession ? "Zmień" : "Dodaj"}
            </StyledButton>
          </div>
        </BookingFormContext.Provider>
      </form>
    </div>
  );
}

export default AddBookingForm;
