import StyledButton from "../../ui/StyledButton";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateTrainer } from "./useCreateTrainer";
import { useEditTrainer } from "./useEditTrainer";
import { schema } from "../../validation/TrainersValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../../ui/FormInput";
import Form from "../../ui/Form";

type TrainerTypes = {
	image: FileList | string;
	name: string;
	phone: string;
	price?: number | null;
	category: string;
};

interface PropsType {
	handleCloseModal?: () => void;
	trainer?: TrainerTypes & { id: string };
}

function AddTrainerForm({
	trainer = {} as TrainerTypes & { id: string },
	handleCloseModal,
}: PropsType) {
	const { id, ...trainerEditData } = trainer;
	const isEditingSession = Boolean(id);
	const { register, handleSubmit, formState } = useForm({
		defaultValues: isEditingSession ? trainerEditData : {},
		resolver: yupResolver(schema),
	});

	const { errors } = formState;
	const { createTrainer } = useCreateTrainer();
	const { editTrainer } = useEditTrainer();

	const onSubmit = (newTrainer: TrainerTypes) => {
		const image =
			typeof newTrainer.image === "string"
				? newTrainer.image
				: newTrainer.image?.[0];
		if (isEditingSession) {
			editTrainer({
				newTrainersData: { ...newTrainer, image } as TrainerTypes,
				id,
			});
		} else {
			createTrainer({ ...newTrainer, image } as TrainerTypes);
		}
		handleCloseModal?.();
	};

	return (
		<Form  onSubmit={handleSubmit(onSubmit)}>

				<FormRow name='name' label='Imię i nazwisko'>
					<FormInput
						errors={errors}
						inputName='name'
						register={register}
						formType='text'
					/>
				</FormRow>

				<FormRow name='category' label='Kategoria'>
					<FormInput
						errors={errors}
						inputName='category'
						register={register}
						formType='text'
					/>
				</FormRow>

				<FormRow name='price' label='Cena'>
					<FormInput
						errors={errors}
						inputName='price'
						register={register}
						formType='number'
					/>
				</FormRow>

				<FormRow name='phone' label='Telefon'>
					<FormInput
						errors={errors}
						inputName='phone'
						register={register}
						formType='tel'
					/>
				</FormRow>

				<label
					htmlFor='image'
					className='font-semibold bg-slate-600 text-violet-100  w-[165px] px-7 rounded-md uppercase text-[15px] py-1 my-4'>
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
		</Form>

	);
}

export default AddTrainerForm;
