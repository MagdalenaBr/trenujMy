import FormLabel from "./FormLabel";

type Props = {
	name: string;
	label: string;
	children: React.ReactNode;
};

function FormRow({name, label, children}: Props) {
	return (
		<FormLabel name={name} label={label}>
			<div className=' gap-3 col-start-2 col-end-5 grid grid-cols-6'>
				{children}
			</div>
		</FormLabel>
	);
}

export default FormRow;
