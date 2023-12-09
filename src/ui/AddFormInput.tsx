import { UseFormRegister, FieldValues } from "react-hook-form";

type Props = {
	name: string;
	type: string;
	style?: string;
	register: UseFormRegister<FieldValues>;
};

const styles =
	"self-center w-80 h-9 rounded-md font-normal text-sm border-2 focus:outline-none focus:ring-2 focus:ring-green-800";

function AddFormInput({ name, type, style, register }: Props) {
	if (name === "name" || name === "category")
		return (
			<input
				id={name}
				type={type}
				className={`${styles} ${style}`}
				{...register(name, { required: "To pole jest wymagane." })}
			/>
		);
	if (name === "price")
		return (
			<input
				id={name}
				type={type}
				className={`${styles} ${style}`}
				{...register(name, {
					required: "To pole jest wymagane",
					minLength: {
						value: 2,
						message: "Minimalna cena wynosi 10zł.",
					},
				})}
			/>
		);
	if (name === "phone")
		return (
			<input
				id={name}
				type={type}
				className={`${styles} ${style}`}
				{...register(name, {
					required: "To pole jest wymagane",
					pattern: {
						value: /^(?:[0+]48)?\d{9}$/,
						message: "Wprowadź prawidłowy numer telefonu.",
					},
				})}
			/>
		);
	// return (
	// 	<input
	// 		id={name}
	// 		type={type}
	// 		className={`self-center w-80 h-9 rounded-md font-normal text-sm ${style} border-2 focus:outline-none focus:ring-2 focus:ring-green-800 `}
	// 		{...register(name, { required: "To pole jest wymagane" })}
	// 	/>
	// );
}

export default AddFormInput;
