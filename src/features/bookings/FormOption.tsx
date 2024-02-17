import { useMember } from "../members/useMember";
import { useTrainer } from "../trainer/useTrainer";

function FormOption({ value, errors, inputName, register }) {
	const { trainers } = useTrainer();
	const { members } = useMember();
	return (
		<>
			<input
				id={inputName}
				{...register(inputName)}
				type='text'
				list={value}
				className='w-80 h-9 rounded-md font-normal text-sm border-2 focus:outline-none focus:ring-2 focus:ring-slate-800 col-start-1 col-end-4'
			/>
			<datalist id={value}>
				{(value === "members" ? members : trainers)?.map(el => (
					<option key={el.id} value={el.name}>
						{el.name}
					</option>
				))}
			</datalist>
			{errors && errors[inputName]?.message && (
				<p className='col-start-4 col-end-7'>
					{errors[inputName]?.message?.toString()}
				</p>
			)}
		</>
	);
}

export default FormOption;
