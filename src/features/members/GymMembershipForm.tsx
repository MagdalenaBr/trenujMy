import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import StyledButton from "../../ui/StyledButton";
import { useQuery } from "@tanstack/react-query";
import { getTrainers } from "../../services/apiTrainers";
import { useEditMember } from "./useEditMember";

type MemberType = {
	id?: number;
	email: string;
	name: string;
	phone: string;
	gender: string;
	city: string;
	startGymMembership?: string | null;
	endGymMembership?: string | null;
	gymMembershipType?: string;
};

function GymMembershipForm({ member, handleCloseModal }) {
	const { id } = member;

	const { data: trainers } = useQuery({
		queryKey: ["trainers"],
		queryFn: getTrainers,
	});

	const { register, handleSubmit} = useForm({
		defaultValues: member,
	});
	const { editMember } = useEditMember();
	const onSubmit = (data: MemberType) => {
		editMember({ newMember: data, id });
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
				<FormRow name='name' label='Data rozpoczęcia'>
					<input
						type='date'
						id='startGymMembership'
						{...register("startGymMembership")}
						className={styles}
					/>
					
				</FormRow>
				<FormRow name='endGymMembership' label='Data zakończenia'>
					<input
						type='date'
						id='endGymMembership'
						{...register("endGymMembership")}
						className={styles}
					/>
					
				</FormRow>
				<FormRow name='gymMembershipType' label='Rodzaj karnetu'>
					<select
						id='gymMembershipType'
						{...register("gymMembershipType")}
						className={styles}>
						<option value='Karnet otwarty'>Karnet otwarty</option>
						{trainers?.map(trainer => (
							<option value={`${trainer.category} ${trainer.name}`}>
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
