import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useCreateBooking } from "./useCreateBooking";
import { useEditBooking } from "./useEditBooking";
import { schema } from "../../validation/BookingValidation";
import FormOption from "../../ui/FormOption";
import FormInput from "../../ui/FormInput";
import FormRow from "../../ui/FormRow";
import StyledButton from "../../ui/StyledButton";
import FormTrainerTypeInputs from "./FormTrainerTypeInputs";
import { useTrainers } from "../trainer/useTrainers";
import Spinner from "../../ui/Spinner";

interface CommonDataTypes {
  status: string;
  trainerId: number;
  memberId: number;
  date: string;
}
interface BookingTypes extends CommonDataTypes {
  created_at: string;
  id: number;
  trainers: {
    name: string;
    category: string;
  };
  members: {
    name: string;
    phone: string;
  };
}

interface ActiveMemberType {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  city: string;
  startGymMembership?: string | null;
  endGymMembership?: string | null;
  gymMembershipType?: string | null;
}
interface PropsType {
  handleCloseModal?: () => void;
  booking?: BookingTypes;
  activeMember?: ActiveMemberType;
  memberId?: number;
  memberName?: string;
}

function AddBookingForm({
  booking = {} as BookingTypes,
  handleCloseModal,
  activeMember,
  memberId,
  memberName,
}: PropsType) {
  const { id, ...bookingsEditData } = booking;
  const { createBooking } = useCreateBooking();
  const { editBooking } = useEditBooking();
  const { trainerIsLoading } = useTrainers();
  const isEditingSession = Boolean(id);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: isEditingSession ? bookingsEditData : {},
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: CommonDataTypes) => {
    if (isEditingSession) {
      editBooking({ newBooking: data, id });
    } else {
      createBooking(data);
    }
    handleCloseModal?.();
  };

  if (trainerIsLoading) return <Spinner />;
  return (
    <div className="rounded-md bg-slate-300 px-10 py-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mx-auto flex flex-col divide-y divide-slate-600/40 py-8 "
      >
        <FormRow name="memberId" label="Imię i nazwisko">
          <FormOption
            value={`members`}
            member={activeMember}
            memberId={memberId}
            memberName={memberName}
            errors={errors}
            inputName="memberId"
            register={register}
          />
        </FormRow>

        <FormTrainerTypeInputs bookingsEditData={bookingsEditData} errors={errors} register={register}/>
        
        <FormRow name="date" label="Data">
          <FormInput
            errors={errors}
            inputName="date"
            register={register}
            formType="datetime-local"
          />
        </FormRow>
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
      </form>
    </div>
  );
}

export default AddBookingForm;
