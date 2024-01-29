import { createPortal } from "react-dom";
import FormInput from "../../ui/FormInput";
import Button from "../../ui/StyledButton";
import Overlay from "../../ui/Overlay";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateTrainer } from "./useCreateTrainer";
import { useEditTrainer } from "./useEditTrainer";

interface IFormInputs {
	id: number;
	name: string;
	category: string;
	price: string;
	phone: number;
	image: string | undefined;
}
[];
type Trainer = {
	id: number;
	name: string;
	category: string;
	price: string;
	phone: number;
	image: string | undefined;
};

type TrainerType = {
	trainer: Trainer | object;
	onCloseForm: () => void;
};

function AddTrainerForm({ trainer = {}, onCloseForm }: TrainerType) {
	const { id, ...trainerEditData } = trainer;

	const isEditingSession = Boolean(id);
	const { register, handleSubmit, formState } = useForm({
		defaultValues: isEditingSession ? trainerEditData : {},
	});

	const { errors } = formState;
	const { createTrainer } = useCreateTrainer();
	const { editTrainer } = useEditTrainer();

	const onSubmit = (newTrainer: IFormInputs) => {
		const image =
			typeof newTrainer.image === "string"
				? newTrainer.image
				: newTrainer.image?.[0];
		if (isEditingSession) {
			editTrainer({ newTrainersData: { ...newTrainer, image }, id });
		} else {
			createTrainer({ ...newTrainer, image });
		}
		onCloseForm();
	};
	/// rozwiązanie submit https://stackoverflow.com/questions/71275687/type-of-handlesubmit-parameter-in-react-hook-form
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

					<FormRow name='category' label='Kategoria'>
						<FormInput type='text' register={register} name='category' />
						{errors?.category?.message && (
							<p className='col-start-4 col-end-7'>
								{" "}
								{errors?.category?.message}
							</p>
						)}
					</FormRow>

					<FormRow name='price' label='Cena'>
						<FormInput type='text' register={register} name='price' />
						{errors?.price?.message && (
							<p className='col-start-4 col-end-7'>{errors?.price?.message}</p>
						)}
					</FormRow>

					<FormRow name='phone' label='Telefon'>
						<FormInput type='tel' register={register} name='phone' />
						{errors?.phone?.message && (
							<p className='col-start-4 col-end-7'>{errors?.phone?.message}</p>
						)}
					</FormRow>

					<label
						htmlFor='image'
						className={`font-semibold bg-slate-600 text-violet-100  w-[165px] px-7 rounded-md uppercase text-[15px] py-1 my-4`}>
						Dodaj zdjęcie
						<FormInput
							type='file'
							style='overflow-hidden w-[0.1px] h-[0.1px] absolute z-[-1]'
							register={register}
							name='image'
							accept='image/png, image/jpeg'
						/>
					</label>

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

export default AddTrainerForm;
