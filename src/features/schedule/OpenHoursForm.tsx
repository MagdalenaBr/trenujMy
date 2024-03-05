import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import StyledButton from "../../ui/StyledButton";
import FormInput from "../../ui/FormInput.tsx";
import { useEditOpenHours } from "./useEditOpenHours.ts";
import { useOpenHours } from "./useOpenHours.ts";

type PropsType = {
	handleCloseModal?: () => void;
};

type HoursType = {
	openHour: string;
	closeHour: string;
};

function OpenHoursForm({ handleCloseModal }: PropsType) {
	const { register, handleSubmit, formState } = useForm({
		defaultValues: {
			openHour: "08:00",
			closeHour: "20:00",
		},
	});
	const { openHours } = useOpenHours();

	const { changeOpenHours } = useEditOpenHours();

	const { errors } = formState;
	if (!openHours) return;
	const id = openHours[0].id;

	const onSubmit = (data: HoursType) => {
		changeOpenHours({ newHours: data, id });
		handleCloseModal?.();
	};

	return (
		<div className='bg-neutral-100 py-6 px-10 rounded-md'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				className='flex flex-col mx-auto  py-8 divide-y '>
				<FormRow name='openHour' label='Godzina otwarcia'>
					<FormInput
						errors={errors}
						inputName='openHour'
						register={register}
						formType='time'
					/>
				</FormRow>
				<FormRow name='closeHour' label='Godzina zamknięcia'>
					<FormInput
						errors={errors}
						inputName='closeHour'
						register={register}
						formType='time'
					/>
				</FormRow>
				<div className='flex gap-4 justify-end pt-4'>
					<StyledButton
						styleType='close'
						type='reset'
						handleClick={() => handleCloseModal?.()}>
						Anuluj
					</StyledButton>
					<StyledButton styleType='add'>Zmień</StyledButton>
				</div>
			</form>
		</div>
	);
}

export default OpenHoursForm;
