import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useCreateBooking } from "./useCreateBooking";
import { useEditBooking } from "./useEditBooking";
import { schema } from "../../validation/BookingValidation";
import FormOption from "./FormOption";
import FormInput from "../../ui/FormInput";
import FormRow from "../../ui/FormRow";
import StyledButton from "../../ui/StyledButton";

type IFormInput = {
	id?: number;
	date: string;
	status: string;
	trainerId: number;
	memberId: number;
};
type PropsType = {
	booking?: IFormInput | any;
	handleCloseModal?: () => void;
	activeMember?: {
		id?: number;
		name: string;
		email: string;
		phone: string;
		gender: string;
		city: string;
		startGymMembership?: string | null;
		endGymMembership?: string | null;
		gymMembershipType?: string | null;
	};
	memberId?: number;
	memberName?: string;
};

function AddBookingForm({
	booking = {},
	handleCloseModal,
	activeMember,
	memberId,
	memberName,
}: PropsType) {
	const { createBooking } = useCreateBooking();
	const { editBooking } = useEditBooking();
	const { id, ...bookingsEditData } = booking;
	const isEditingSession = Boolean(id);

	const { register, handleSubmit, formState } = useForm({
		defaultValues: isEditingSession ? bookingsEditData : {},
		resolver: yupResolver(schema),
	});
	const { errors } = formState;

	const onSubmit = (data: IFormInput) => {
		if (isEditingSession) {
			editBooking({ newBooking: data, id });
		} else {
			createBooking(data);
		}
		handleCloseModal?.();
	};

	return (
		<div className='bg-neutral-100 py-6 px-10 rounded-md'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				className='flex flex-col mx-auto  py-8 divide-y '>
				<FormRow name='memberId' label='Imię i nazwisko'>
					<FormOption
						value={`members`}
						member={activeMember}
						memberId={memberId}
						memberName={memberName}
						errors={errors}
						inputName='memberId'
						register={register}
					/>
				</FormRow>
				<FormRow name='trainerId' label='Trener'>
					<FormOption
						value={`trainers`}
						errors={errors}
						inputName='trainerId'
						register={register}
					/>
				</FormRow>
				<FormRow name='date' label='Data'>
					<FormInput
						errors={errors}
						inputName='date'
						register={register}
						formType='datetime-local'
					/>
				</FormRow>
				<FormRow name='status' label='Status'>
					<select
						id='status'
						{...register("status")}
						className='w-80 h-9 rounded-md font-normal text-sm border-2 focus:outline-none focus:ring-2 focus:ring-slate-800 col-start-1 col-end-4'>
						<option value=''></option>
						<option value='zrealizowana'>zrealizowana</option>
						<option value='niepotwierdzona'>niepotwierdzona</option>
						<option value='anulowana'>anulowana</option>
					</select>
					{errors.status?.message && (
						<p className='col-start-4 col-end-7'>
							{errors.status.message.toString()}
						</p>
					)}
				</FormRow>

				<div className='flex gap-4 justify-end pt-4'>
					<StyledButton
						styleType='close'
						type='reset'
						handleClick={() => handleCloseModal?.()}>
						Anuluj
					</StyledButton>
					<StyledButton styleType='add'>
						{isEditingSession ? "Zmień" : "Dodaj"}
					</StyledButton>
				</div>
			</form>
		</div>
	);
}

export default AddBookingForm;
