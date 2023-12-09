type Props = {
	name: string;
	label: string;
	children: React.ReactNode;
};

function FormLabel({ name, label, children }: Props) {
	return (
		<div className=''>
			<label htmlFor={name} className={`font-semibold grid grid-cols-4 my-4`}>
				{label}
				{children}
			</label>
		</div>
	);
}

export default FormLabel;
