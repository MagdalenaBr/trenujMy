import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import StyledButton from "../../ui/StyledButton";
import { useEditMember } from "./useEditMember";
import FormInput from "../../ui/FormInput";
import { useTrainers } from "../trainer/useTrainers";

interface CommonData {
	city: string;
	email: string;
	endGymMembership: string;
	gender: string;
	gymMembershipType: string;
	name: string;
	phone: string;
	startGymMembership: string;
}
interface MemberTypes extends CommonData {
	id: number;
}

interface PropsType {
	handleCloseModal?: () => void;
	member: MemberTypes;
}

function GymMembershipForm({ member, handleCloseModal }: PropsType) {
	const { id } = member;
	const { trainers } = useTrainers();

	const { register, handleSubmit } = useForm({
		defaultValues: member,
	});
	const { editMember } = useEditMember();
	const onSubmit = (data: CommonData) => {
		editMember({ newMember: data, id });
		handleCloseModal?.();
	};

	return (
		<div className='bg-neutral-100 py-6 px-10 rounded-md'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				className='flex flex-col mx-auto  py-8 divide-y '>
				<FormRow name='startGymMembership' label='Data rozpoczęcia'>
					<FormInput
						inputName='startGymMembership'
						register={register}
						formType='date'
					/>
				</FormRow>

				<FormRow name='endGymMembership' label='Data zakończenia'>
					<FormInput
						inputName='endGymMembership'
						register={register}
						formType='date'
					/>
				</FormRow>

				<FormRow name='gymMembershipType' label='Rodzaj karnetu'>
					<select
						id='gymMembershipType'
						{...register("gymMembershipType")}
						className='w-80 h-9 rounded-md font-normal text-sm border-2 focus:outline-none focus:ring-2 focus:ring-slate-800 col-start-1 col-end-4'>
						<option value='Karnet otwarty'>Karnet otwarty</option>
						{trainers?.map(trainer => (
							<option
								key={trainer.id}
								value={`${trainer.category} ${trainer.name}`}>
								{trainer.category} {trainer.name} {trainer.price}zł
							</option>
						))}
					</select>
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

export default GymMembershipForm;
