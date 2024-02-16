import { useForm } from "react-hook-form";
import FormInput from "../../ui/FormInput";
import FormRow from "../../ui/FormRow";
import StyledButton from "../../ui/StyledButton";
import { useBookings } from "./useBookings";
import FormOption from "./FormOption";

function AddBookingForm({ handleCloseModal }) {
	const { bookings } = useBookings();
	console.log(bookings);
	const { register, handleSubmit, formState } = useForm({
		// defaultValues: isEditingSession ? memberEditData : {},
		// resolver: yupResolver(schema),
	});

	// const memberOptions = bookings?.map(booking => (
	// 	<option value={booking.members.name}>{booking.members.name}</option>
	// ));

	const { errors } = formState;
	return (
		<div className='bg-neutral-100 py-6 px-10 rounded-md'>
			<form
				// onSubmit={handleSubmit(onSubmit)}
				noValidate
				className='flex flex-col mx-auto  py-8 divide-y '>
				<FormRow name='memberId' label='Imię i nazwisko'>
					<select
						id='memberId'
						{...register("memberId")}
						className='w-80 h-9 rounded-md font-normal text-sm border-2 focus:outline-none focus:ring-2 focus:ring-slate-800 col-start-1 col-end-4'>
						{/* {bookings?.map(booking => (
							<option value={booking.members.name}>
								{booking.members.name}
							</option>
						))} */}
						{/* {memberOptions} */}
                        <FormOption value={`members.name`}/>
					</select>

					{/* <FormInput
						errors={errors}
						inputName='name'
						register={register}
						formType='text'
					/> */}
				</FormRow>
				<FormRow name='email' label='E-mail'>
					<FormInput
						errors={errors}
						inputName='email'
						register={register}
						formType='email'
					/>
				</FormRow>
				<FormRow name='phone' label='Telefon'>
					<FormInput
						errors={errors}
						inputName='phone'
						register={register}
						formType='text'
					/>
				</FormRow>
				<FormRow name='gender' label='Płeć'>
					<select
						id='gender'
						{...register("gender")}
						className='w-80 h-9 rounded-md font-normal text-sm border-2 focus:outline-none focus:ring-2 focus:ring-slate-800 col-start-1 col-end-4'>
						<option value=''>Wybierz płeć</option>
						<option value='Kobieta'>Kobieta</option>
						<option value='Mężczyzna'>Mężczyzna</option>
						<option value='Inna'>Inna</option>
					</select>
					{errors.gender?.message && (
						<p className='col-start-4 col-end-7'>{errors.gender.message}</p>
					)}
				</FormRow>
				<FormRow name='city' label='Miasto'>
					<FormInput
						errors={errors}
						inputName='city'
						register={register}
						formType='text'
					/>
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
