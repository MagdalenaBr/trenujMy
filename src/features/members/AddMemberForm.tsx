import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import Overlay from "../../ui/Overlay";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { schema } from "../../validation/MembersValidation.";
import useCreateMember from "./useCreateMember";

interface IFormInput {
	id: number
	name: string;
	email: string;
	phone: string;
	gender: string;
	city: string;
}
//https://medium.com/@msgold/creating-a-react-form-using-react-hook-form-and-yup-in-typescript-640168c5ed57

function AddMemberForm({ onCloseForm }) {
	const styles =
		"w-80 h-9 rounded-md font-normal text-sm border-2 focus:outline-none focus:ring-2 focus:ring-slate-800 col-start-1 col-end-4";

	const { register, handleSubmit, formState } = useForm<IFormInput>({
		resolver: yupResolver(schema),
	});
	const { errors } = formState;
	const { createMember } = useCreateMember();
	function onSubmit(data: IFormInput) {
		createMember(data);
	}

	return createPortal(
		<Overlay>
			<div className='bg-neutral-100 py-6 px-10 rounded-md'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					className='flex flex-col mx-auto  py-8 divide-y '>
					<FormRow name='name' label='Imię i nazwisko'>
						<input type='text' {...register("name")} className={styles} />
						{errors.name?.message && (
							<p className='col-start-4 col-end-7'>{errors.name.message}</p>
						)}
					</FormRow>
					<FormRow name='email' label='E-mail'>
						<input type='email' {...register("email")} className={styles} />
						{errors.email?.message && (
							<p className='col-start-4 col-end-7'>{errors.email.message}</p>
						)}
					</FormRow>
					<FormRow name='phone' label='Telefon'>
						<input type='text' {...register("phone")} className={styles} />
						{errors.phone?.message && (
							<p className='col-start-4 col-end-7'>{errors.phone.message}</p>
						)}
					</FormRow>
					<FormRow name='gender' label='Płeć'>
						<input type='text' {...register("gender")} className={styles} />
						{errors.gender?.message && (
							<p className='col-start-4 col-end-7'>{errors.gender.message}</p>
						)}
					</FormRow>
					<FormRow name='city' label='Miasto'>
						<input type='text' {...register("city")} className={styles} />
						{errors.city?.message && (
							<p className='col-start-4 col-end-7'>{errors.city.message}</p>
						)}
					</FormRow>

					<div className='flex gap-4 justify-end pt-4'>
						<Button
							styleType='close'
							type='reset'
							handleClick={() => onCloseForm()}>
							Anuluj
						</Button>
						<Button styleType='add'>Dodaj</Button>
					</div>
				</form>
			</div>
		</Overlay>,
		document.body
	);
}

export default AddMemberForm;
