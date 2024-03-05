import { FieldErrors, UseFormRegister } from "react-hook-form";
import { useTrainers } from "../trainer/useTrainers";

type PropsType = {
	errors?: FieldErrors;
	inputName: string;
	register: UseFormRegister<any>;
	value: string;
	memberId?: number;
	memberName?: string;
	member?: {
		id?: number;
		name: string;
		email: string;
		phone: string;
		gender: string;
		city: string;
		startGymMembership?: string | null;
		endGymMembership?: string | null;
		gymMembershipType?: string | null;
	};
};

function FormOption({
	errors,
	inputName,
	register,
	member,
	value,
	memberId,
	memberName,
}: PropsType) {
	const { trainers } = useTrainers();

	return (
		<>
			<select
				id={inputName}
				{...register(inputName)}
				className='w-80 h-9 rounded-md font-normal text-sm border-2 focus:outline-none focus:ring-2 focus:ring-slate-800 col-start-1 col-end-4'>
				{value === "trainers" && (
					<>
						<option value=''></option>
						{trainers?.map(el => (
							<option
								key={el.id}
								value={el.id}
								label={`${el.name} ${el.phone}`}>
								{el.name}
							</option>
						))}
					</>
				)}
				{value === "members" && (
					<option
						value={member ? member.id : memberId}
						label={member ? member.name : memberName}></option>
				)}
			</select>
			{errors && errors[inputName]?.message && (
				<p className='col-start-4 col-end-7'>
					{errors[inputName]?.message?.toString()}
				</p>
			)}
		</>
	);
}

export default FormOption;
