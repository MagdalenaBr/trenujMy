import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormRow from "../../ui/FormRow";
import StyledButton from "../../ui/StyledButton";
import { schema } from "../../validation/MembersValidation.";
import useCreateMember from "./useCreateMember";
import { useEditMember } from "./useEditMember";

type IFormInput = {
	id?: number;
	name: string;
	email: string;
	phone: string;
	gender: string;
	city: string;
	startGymMembership?: string | null;
	endGymMembership?: string | null;
};
type PropsType = {
	member?: IFormInput | any;
	handleCloseModal?: () => void;
};

function AddMemberForm({ member = {}, handleCloseModal }: PropsType) {

	const { id, ...memberEditData } = member;

	const isEditingSession = Boolean(id);

	const { register, handleSubmit, formState } = useForm<IFormInput>({
		defaultValues: isEditingSession ? memberEditData : {},
		resolver: yupResolver(schema),
	});

	const { errors } = formState;
	const { createMember } = useCreateMember();
	const { editMember } = useEditMember();

	const onSubmit = (data: IFormInput) => {
		console.log(isEditingSession);
		if (isEditingSession) {
			editMember({ newMember: data, id });
		} else {
			createMember({ ...data });
		}

		handleCloseModal?.();
	};

	console.log(formState.errors);
	const styles =
		"w-80 h-9 rounded-md font-normal text-sm border-2 focus:outline-none focus:ring-2 focus:ring-slate-800 col-start-1 col-end-4";
	return (
		<div className='bg-neutral-100 py-6 px-10 rounded-md'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				className='flex flex-col mx-auto  py-8 divide-y '>
				<FormRow name='name' label='Imię i nazwisko'>
					<input
						type='text'
						id='name'
						{...register("name")}
						className={styles}
					/>
					{errors.name?.message && (
						<p className='col-start-4 col-end-7'>{errors.name.message}</p>
					)}
				</FormRow>
				<FormRow name='email' label='E-mail'>
					<input
						type='email'
						id='email'
						{...register("email")}
						className={styles}
					/>
					{errors.email?.message && (
						<p className='col-start-4 col-end-7'>{errors.email.message}</p>
					)}
				</FormRow>
				<FormRow name='phone' label='Telefon'>
					<input
						type='text'
						id='phone'
						{...register("phone")}
						className={styles}
					/>
					{errors.phone?.message && (
						<p className='col-start-4 col-end-7'>{errors.phone.message}</p>
					)}
				</FormRow>
				<FormRow name='gender' label='Płeć'>
					{/* <input
						type='text'
						id='gender'
						{...register("gender")}
						className={styles}
					/> */}
					<select id='gender' {...register("gender")} className={styles}>
						<option value='Kobieta'>Kobieta</option>
						<option value='Mężczyzna'>Mężczyzna</option>
						<option value='Inna'>Inna</option>
					</select>
					{errors.gender?.message && (
						<p className='col-start-4 col-end-7'>{errors.gender.message}</p>
					)}
				</FormRow>
				<FormRow name='city' label='Miasto'>
					<input
						type='text'
						id='city'
						{...register("city")}
						className={styles}
					/>
					{errors.city?.message && (
						<p className='col-start-4 col-end-7'>{errors.city.message}</p>
					)}
				</FormRow>

				<div className='flex gap-4 justify-end pt-4'>
					<StyledButton
						styleType='close'
						type='reset'
						handleClick={() => handleCloseModal?.()}>
						Anuluj
					</StyledButton>
					<StyledButton styleType='add'>Dodaj</StyledButton>
				</div>
			</form>
		</div>
	);
}

export default AddMemberForm;
