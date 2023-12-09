import { createPortal } from "react-dom";
import AddFormInput from "../../ui/AddFormInput";
import AddFormLabel from "../../ui/AddFormLabel";
import Button from "../../ui/Button";
import Overlay from "../../ui/Overlay";
import { SubmitHandler, useForm } from "react-hook-form";
import { addTrainers } from "../../services/apiTrainers";
import FormRow from "../../ui/FormRow";

type Props = {
	showForm: boolean;
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};
interface IFormInputs {
	name: string;
	category: string;
	price: string;
	phone: number;
	photo: string;
}

function AddTrainerForm({ showForm, setShowForm }: Props) {
	const { register, handleSubmit, formState } = useForm();
	const onSubmit: SubmitHandler<IFormInputs> = newTrainer => {
		addTrainers(newTrainer);
		setShowForm(!showForm);
	};
	const { errors } = formState;
	console.log(errors.name);
	function onError(err) {
		console.log(err);
	}
	return createPortal(
		<Overlay>
			<div className='bg-neutral-100 py-6 px-10 rounded-md w-[50rem]'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					className='flex flex-col w-[30rem] mx-auto gap-4 py-8 w-full'>
					{/* <AddFormLabel name='name' label='Imię i nazwisko'>
						<div className="flex gap-3">
							<AddFormInput type='text' register={register} name='name' />
							{errors?.name?.message && <p>{errors?.name?.message}</p>}
						</div>
					</AddFormLabel> */}

					<FormRow name='name' label='Imię i nazwisko'>
						<AddFormInput type='text' register={register} name='name' />
						{errors?.name?.message && <p>{errors?.name?.message}</p>}
					</FormRow>
					<AddFormLabel name='category' label='Kategoria'>
						<div className='flex'>
							<AddFormInput type='text' register={register} name='category' />
							{errors?.category?.message && <p>{errors?.category?.message}</p>}
						</div>
					</AddFormLabel>
					<AddFormLabel name='price' label='Cena'>
						<AddFormInput type='text' register={register} name='price' />
						{errors?.price?.message && <p>{errors?.price?.message}</p>}
					</AddFormLabel>
					<AddFormLabel name='phone' label='Telefon'>
						<AddFormInput type='tel' register={register} name='phone' />
						{errors?.phone?.message && <p>{errors?.phone?.message}</p>}
					</AddFormLabel>
					{/* <AddFormLabel
						name='photo'
						label='Dodaj zdjęcie'
						style='bg-green-800 text-green-50  w-[165px] px-7 rounded-md uppercase text-[15px] py-1'>
						<AddFormInput
							type='file'
							style='overflow-hidden w-[0.1px] h-[0.1px] absolute z-[-1]'
							register={register}
							name='photo'
						/>
					</AddFormLabel> */}
					<div className='flex gap-4 justify-end pt-4'>
						<Button
							styleType='close'
							type='reset'
							handleClick={() => setShowForm(!showForm)}>
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

export default AddTrainerForm;
