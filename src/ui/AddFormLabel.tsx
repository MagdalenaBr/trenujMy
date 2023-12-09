type Props = {
	name: string;
	label: string;
	children: React.ReactNode;
	style?: string;
};

function AddFormLabel({ name, label, style, children }: Props) {
	return (
		<div>
			<label
				htmlFor={name}
				className={`self-start flex justify-between font-semibold  ${style}`}>
				{label}
				{children}
			</label>
		</div>
	);
}

export default AddFormLabel;
