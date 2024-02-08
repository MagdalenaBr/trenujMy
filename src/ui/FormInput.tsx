import { UseFormRegister, FieldErrors } from "react-hook-form";

type IFormInput = {
	id?: number;
	name: string;
	email: string;
	phone: string;
	gender: string;
	city: string;
	startGymMembership?: string | null;
	endGymMembership?: string | null;
	gymMembershipType?: string | undefined;
};
type PropsType = {
	errors?: FieldErrors;
	formType: string;
	register: UseFormRegister<IFormInput>;
	inputName: string;
};

function FormInput({ errors, inputName, register, formType }: PropsType) {
	return (
		<>
			<input
				type={formType}
				id={inputName}
				{...register(inputName as keyof IFormInput)}
				className='w-80 h-9 rounded-md font-normal text-sm border-2 focus:outline-none focus:ring-2 focus:ring-slate-800 col-start-1 col-end-4'
			/>
			{errors && errors[inputName]?.message && (
				<p className='col-start-4 col-end-7'>
					{errors[inputName]?.message?.toString()}
				</p>
			)}
		</>
	);
}

export default FormInput;
