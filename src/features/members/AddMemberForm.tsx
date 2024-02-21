import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormRow from "../../ui/FormRow";
import StyledButton from "../../ui/StyledButton";
import { schema } from "../../validation/MembersValidation.tsx";
import useCreateMember from "./useCreateMember";
import { useEditMember } from "./useEditMember";
import FormInput from "../../ui/FormInput.tsx";

type IFormInput = {
	id?: number;
	name: string;
	email: string;
	phone: string;
	gender: string;
	city: string;
	startGymMembership?: string | null;
	endGymMembership?: string | null;
	gymMembershipType?: string | undefined;
};
type PropsType = {
	member?: IFormInput | any;
	handleCloseModal?: () => void;
};

function AddMemberForm({ member = {}, handleCloseModal }: PropsType) {
	const { id, ...memberEditData } = member;
	const isEditingSession = Boolean(id);
	const { createMember } = useCreateMember();
	const { editMember } = useEditMember();

	const { register, handleSubmit, formState } = useForm<IFormInput>({
		defaultValues: isEditingSession ? memberEditData : {},
		resolver: yupResolver(schema),
	});
	const { errors } = formState;
	console.log(errors);


	const onSubmit = (data: IFormInput) => {
		console.log(data);
		if (isEditingSession) {
			editMember({ newMember: data, id });
		} else {
			createMember({ ...data });
		}
		handleCloseModal?.();
	};

	return (
		<div className='bg-neutral-100 py-6 px-10 rounded-md'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				className='flex flex-col mx-auto  py-8 divide-y '>
				<FormRow name='name' label='Imię i nazwisko'>
					<FormInput
						errors={errors}
						inputName='name'
						register={register}
						formType='text'
					/>
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
						{isEditingSession ? "Zmień" : "Dodaj"}
					</StyledButton>
				</div>
			</form>
		</div>
	);
}

export default AddMemberForm;
