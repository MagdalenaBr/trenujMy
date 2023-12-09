import AddFormLabel from "./AddFormLabel";

function FormRow({name, label, children}) {
	return (
		<AddFormLabel name={name} label={label}>
			<div className='flex gap-3'>
				{children}
			</div>
		</AddFormLabel>
	);
}

export default FormRow;
