import StyledButton from "../../ui/StyledButton";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateTrainer } from "./useCreateTrainer";
import { useEditTrainer } from "./useEditTrainer";
import { schema } from "../../validation/TrainersValidation";
import { yupResolver } from "@hookform/resolvers/yup";

type Trainer = {
	id?: number;
	name: string;
	category: string;
	price: string;
	phone: string;
	image: FileList | any;
};

type TrainerType = {
	trainer?: Trainer | any;
	handleCloseModal?: () => void;
};

function AddTrainerForm({ trainer = {}, handleCloseModal }: TrainerType) {
	console.log(trainer);
	const { id, ...trainerEditData } = trainer;
	const isEditingSession = Boolean(id);

	const { register, handleSubmit, formState } = useForm<Trainer>({
		defaultValues: isEditingSession ? trainerEditData : {},
		resolver: yupResolver(schema),
	});

	const { errors } = formState;
	const { createTrainer } = useCreateTrainer();
	const { editTrainer } = useEditTrainer();

	const onSubmit = (newTrainer: Trainer) => {
		const image =
			typeof newTrainer.image === "string"
				? newTrainer.image
				: newTrainer.image?.[0];
		if (isEditingSession) {
			editTrainer({ newTrainersData: { ...newTrainer, image }, id });
		} else {
			createTrainer({ ...newTrainer, image });
		}
		handleCloseModal?.();
	};

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

				<FormRow name='category' label='Kategoria'>
					<input
						type='text'
						id='category'
						{...register("category")}
						className={styles}
					/>
					{errors.category?.message && (
						<p className='col-start-4 col-end-7'>{errors.category.message}</p>
					)}
				</FormRow>

				<FormRow name='price' label='Cena'>
					<input
						type='text'
						id='price'
						{...register("price")}
						className={styles}
					/>
					{errors.price?.message && (
						<p className='col-start-4 col-end-7'>{errors.price.message}</p>
					)}
				</FormRow>

				<FormRow name='phone' label='Telefon'>
					<input
						type='tel'
						id='phone'
						{...register("phone")}
						className={styles}
					/>
					{errors.phone?.message && (
						<p className='col-start-4 col-end-7'>{errors.phone.message}</p>
					)}
				</FormRow>

				<label
					htmlFor='image'
					className={`font-semibold bg-slate-600 text-violet-100  w-[165px] px-7 rounded-md uppercase text-[15px] py-1 my-4`}>
					Dodaj zdjęcie
					<input
						type='file'
						id='image'
						{...register("image")}
						className='overflow-hidden w-[0.1px] h-[0.1px] absolute z-[-1]'
						accept='image/png, image/jpeg'
					/>
					{errors.image?.message && (
						<p className='col-start-4 col-end-7'>
							{errors.image.message?.toString()}
						</p>
					)}
				</label>

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

export default AddTrainerForm;
