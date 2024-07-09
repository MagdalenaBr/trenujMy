import { useForm } from "react-hook-form";
import { useCreateBooking } from "./useCreateBooking";
import { useEditBooking } from "./useEditBooking";
import FormRow from "../../ui/FormRow";
import TrainerInputs from "./TrainerInputs";
import { useTrainers } from "../trainer/useTrainers";
import Spinner from "../../ui/Spinner";
import { useSchedules } from "../schedule/useSchedules";
import DateInput from "./DateInput";
import Form from "../../ui/Form";
import FormOption from "../../ui/FormOption";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema as classesValidation } from "../../validation/BookingClassesValidation";
import { schema as personalTrainerValidation } from "../../validation/PersonalTrainerBooking";
import FormButton from "../../ui/FormButton";
import { NewBookingTypes } from "../../types/bookingTypes";

interface CommonDataTypes {
  status: string;
  trainerId: string;
  date?: string;
}
interface BookingTypes extends CommonDataTypes {
  created_at: string;
  id: string;
  trainers: {
    id: string
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
  closeSelectModal?:  () => void;
  typeOfActivities: string;
}

function AddBookingForm({
  booking = {} as BookingTypes,
  handleCloseModal,
  memberIdNumber,
  closeSelectModal,
  typeOfActivities,
}: PropsType) {
  const { id, ...bookingsEditData } = booking;
  const { createBooking } = useCreateBooking();
  const { editBooking } = useEditBooking();
  const { trainerIsLoading } = useTrainers();
  const { scheduleIsLoading } = useSchedules("currentSchedule");
  const isEditingSession = Boolean(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: isEditingSession
      ? typeOfActivities !== "groupActivities"
        ? bookingsEditData
        : {
            ...bookingsEditData,
            trainerId: `${bookingsEditData.trainerId} ${bookingsEditData.date}`,
          }
      : {},
    resolver: yupResolver(
      typeOfActivities === "groupActivities"
        ? classesValidation
        : personalTrainerValidation,
    ),
  });

  const onSubmit = (data: CommonDataTypes) => {

    const { date, status, trainerId } = data;

    let newBookingData
    if (typeOfActivities === "groupActivities") {
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
      } as NewBookingTypes;
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
      <p className="text-md align-self-center py-1 text-center font-bold uppercase tracking-wider text-textLight">
        {typeOfActivities === "personalTrainer"
          ? "Trener personalny"
          : "Zajęcia grupowe"}
      </p>

      <TrainerInputs
        errors={errors}
        register={register}
        typeOfActivities={typeOfActivities}
      />

      {typeOfActivities === "personalTrainer" && (
        <DateInput register={register} errors={errors} />
      )}

      <FormRow name="status" label="Status">
        <FormOption errors={errors} inputName="status" register={register}>
          <option value="zrealizowana">zrealizowana</option>
          <option value="niepotwierdzona">niepotwierdzona</option>
          <option value="anulowana">anulowana</option>
        </FormOption>
      </FormRow>

      <div>
        <div className="flex justify-center gap-5 py-4 text-sm">
          <FormButton
            px="3"
            py="2"
            type="reset"
            handleClick={() => {
              handleCloseModal?.();
              closeSelectModal?.();
            }}
          >
            Anuluj
          </FormButton>
          <FormButton px="3" py="2" type="submit">
            {isEditingSession ? "Zmień" : "Dodaj"}
          </FormButton>
        </div>
      </div>
    </Form>
  );
}

export default AddBookingForm;
