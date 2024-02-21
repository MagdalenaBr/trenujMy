import { useForm } from "react-hook-form";
import FormInput from "../../ui/FormInput";
import FormRow from "../../ui/FormRow";
import StyledButton from "../../ui/StyledButton";
import { useBookings } from "./useBookings";
import FormOption from "./FormOption";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/BookingValidation";
import useCreateBooking from "./useCreateBooking";
import { useEditBooking } from "./useEditBooking";
import { useTrainer } from "../trainer/useTrainer";
import Spinner from "../../ui/Spinner";
import { useEffect } from "react";

function AddBookingForm({
	booking = {},
	handleCloseModal,
}) {
	const { createBooking } = useCreateBooking();
	const { editBooking } = useEditBooking();
	const { id, ...bookingsEditData } = booking;
	// const trainerId = bookingsEditData.trainerId;

	// const { selectedTrainer, trainerIsLoading } = useTrainer(trainerId);

	// const trainerName = selectedTrainer.name;
	// console.log(trainerName);

	// const chengedIdToNameBookingData = {
	// 	...bookingsEditData,
	// 	trainerId: trainerName,
	// };
	// console.log(chengedIdToNameBookingData);
	// console.log(changedBookingData);

	const isEditingSession = Boolean(id);

	const { register, handleSubmit, formState } = useForm({
		defaultValues: isEditingSession ? bookingsEditData : {},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
	
		if (isEditingSession) {
			editBooking({ newBooking: data, id });
		} else {
			createBooking({ ...data });
		}
		handleCloseModal?.();
	};

	const { errors } = formState;
	

	return (
		<div className='bg-neutral-100 py-6 px-10 rounded-md'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				className='flex flex-col mx-auto  py-8 divide-y '>
				<FormRow name='memberId' label='Imię i nazwisko'>
					<FormOption
						value={`members`}
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
						<p className='col-start-4 col-end-7'>{errors.status.message}</p>
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
						{/* {isEditingSession ? "Zmień" : "Dodaj"} */}
						Dodaj
					</StyledButton>
				</div>
			</form>
		</div>
	);
}

export default AddBookingForm;
