import { FieldErrors, UseFormRegister } from "react-hook-form";

type TrainersType = {
	id: number;
	name: string;
	category: string;
	price: number;
	phone: string;
	image: any;
}[];

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
	trainerData?: TrainersType;
};

function FormOption({
	errors,
	inputName,
	register,
	member,
	value,
	memberId,
	memberName,
	trainerData,
}: PropsType) {
	const typesOfActivities = trainerData?.map(el => el.category);
	const uniqueTypesOfActivities = [...new Set(typesOfActivities)].filter(
		el => el !== "trener personalny"
	);

	return (
		<>
			<select
				id={inputName}
				{...register(inputName)}
				className='w-80 h-9 rounded-md font-normal text-sm border-2 focus:outline-none focus:ring-2 focus:ring-slate-800 col-start-1 col-end-4'>
				{value === "trainers" && (
					<>
						<option value=''></option>
						{trainerData?.map(el => (
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
						key={member ? member.id : memberId}
						value={member ? member.id : memberId}
						label={member ? member.name : memberName}></option>
				)}
				{value === "typeOfActivities" && (
					<>
						<option value=''></option>
						{uniqueTypesOfActivities?.map(category => (
							<option key={category} value={category} label={category}></option>
						))}
					</>
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
