import { useMembers } from "../members/useMembers";
import { useTrainers } from "../trainer/useTrainers";

function FormOption({ value, errors, inputName, register }) {
	const { trainers } = useTrainers();
	const { members } = useMembers();
	return (
		<>
			{/* <input
				id={inputName}
				{...register(inputName)}
				type='text'
				list={value}
				className='w-80 h-9 rounded-md font-normal text-sm border-2 focus:outline-none focus:ring-2 focus:ring-slate-800 col-start-1 col-end-4'
			/> */}
			<select
				id={inputName}
				{...register(inputName)}
				className='w-80 h-9 rounded-md font-normal text-sm border-2 focus:outline-none focus:ring-2 focus:ring-slate-800 col-start-1 col-end-4'>
				{(value === "members" ? members : trainers)?.map(el => (
					<option key={el.id} value={el.id} label={el.name}>
						{el.name}
					</option>
				))}
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
