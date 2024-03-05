import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import StyledButton from "../../ui/StyledButton";
import FormInput from "../../ui/FormInput.tsx";
import { useTrainers } from "../trainer/useTrainers.tsx";
import FormOption from "../../ui/FormOption.tsx";
import { useCreateClasses } from "./useCreateClasses.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/ScheduleValidation.tsx";

type PropsType = {
	handleCloseModal?: () => void;
};

type ClassesType = {
	id?: number;
	name: string;
	numOfPlaces: number;
	trainerId: number;
	date: string;
};

function CreateScheduleForm({ handleCloseModal }: PropsType) {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(schema),
	});
	const { errors } = formState;

	const { trainers } = useTrainers();
	const { createClasses } = useCreateClasses();
	console.log(errors);

	const onSubmit = (data: ClassesType) => {
		createClasses(data);
		handleCloseModal?.();
	};

	return (
		<div className='bg-neutral-100 py-6 px-10 rounded-md'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				className='flex flex-col mx-auto  py-8 divide-y '>
				<FormRow name='name' label='Rodzaj zajęć'>
					<FormOption
						data={trainers}
						value='typeOfActivities'
						errors={errors}
						inputName='name'
						register={register}
					/>
				</FormRow>
				<FormRow name='trainerId' label='Trener'>
					<FormOption
						data={trainers}
						errors={errors}
						value='trainers'
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
				<FormRow name='numOfPlaces' label='Ilość miejsc'>
					<FormInput
						errors={errors}
						inputName='numOfPlaces'
						register={register}
						formType='number'
					/>
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

export default CreateScheduleForm;
