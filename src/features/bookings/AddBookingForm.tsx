import { useForm } from "react-hook-form";
import { useCreateBooking } from "./useCreateBooking";
import { useEditBooking } from "./useEditBooking";
import FormRow from "../../ui/FormRow";
import TrainerInputs from "./TrainerInputs";
import { useTrainers } from "../trainer/useTrainers";
import Spinner from "../../ui/Spinner";
import { useSchedules } from "../schedule/useSchedules";
import { createContext, useState } from "react";
import DateInput from "./DateInput";
import Form from "../../ui/Form";
import ButtonsContainer from "../../ui/ButtonsContainer";

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
  bookingDate: string;
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
  });

  const onSubmit = (data: CommonDataTypes) => {
    const { date, status, trainerId } = data;

    let newBookingData;
    if (activitiesType === "groupActivities") {
      newBookingData = {
        date: trainerId.split(" ")[1],
        memberId: memberIdNumber,
        status,
        trainerId: trainerId.split(" ")[0],
      };
    } else {
      newBookingData = {
        date,
        memberId: memberIdNumber,
        status,
        trainerId,
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
    <Form onSubmit={handleSubmit(onSubmit)}>


        <BookingFormContext.Provider
          value={{
            activitiesType,
            setActivitiesType,
            setBookingDate,
            isEditingSession,
            bookingDate,
          }}
        >
          <p className="text-md align-self-center   border-slate-400 py-1 text-center font-bold uppercase">
            {memberName}
          </p>

          <TrainerInputs errors={errors} register={register} />
          <DateInput register={register} errors={errors} />

          <FormRow name="status" label="Status">
            <select
              id="status"
              {...register("status", { required: "Wybierz status" })}
              className="col-start-1 col-end-4 h-9 w-80  border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800"
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
          
          <ButtonsContainer isEditingSession={isEditingSession} handleClick={() => handleCloseModal?.()}/>
        </BookingFormContext.Provider>
    </Form>
  );
}

export default AddBookingForm;
