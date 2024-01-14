import FormInput from "../../ui/FormInput";
import Overlay from "../../ui/Overlay";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import Button from "../../ui/Button";

type FormValues ={
	name: string;
	email: string;
	phone: number;
	gender: string;
	city: string;
}

function AddMemberForm({onCloseForm}) {
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState
    function onSubmit(data) {
        console.log(data);
    }
	return createPortal(
		<Overlay>
			<div className='bg-neutral-100 py-6 px-10 rounded-md'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					className='flex flex-col mx-auto  py-8 divide-y '>
					<FormRow name='name' label='Imię i nazwisko'>
						<FormInput type='text' register={register} name='name' />
						{errors?.name?.message && (
							<p className='col-start-4 col-end-7'>{errors?.name?.message}</p>
						)}
					</FormRow>

					<FormRow name='email' label='E-mail'>
						<FormInput type='email' register={register} name='email' />
						{errors?.email?.message && (
							<p className='col-start-4 col-end-7'>
								{" "}
								{errors?.email?.message}
							</p>
						)}
					</FormRow>

					<FormRow name='phone' label='Telefon'>
						<FormInput type='tel' register={register} name='phone' />
						{errors?.phone?.message && (
							<p className='col-start-4 col-end-7'>{errors?.phone?.message}</p>
						)}
					</FormRow>
					<FormRow name='gender' label='Płeć'>
						<FormInput type='text' register={register} name='gender' />
						{errors?.gender?.message && (
							<p className='col-start-4 col-end-7'>{errors?.gender?.message}</p>
						)}
					</FormRow>
					<FormRow name='city' label='Miasto'>
						<FormInput type='text' register={register} name='city' />
						{errors?.city?.message && (
							<p className='col-start-4 col-end-7'>{errors?.city?.message}</p>
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
