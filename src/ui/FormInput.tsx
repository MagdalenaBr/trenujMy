import { UseFormRegister, FieldValues } from "react-hook-form";

type Props = {
	name: string;
	type: string;
	style?: string;
	register: UseFormRegister<FieldValues>;
	accept?: string;
};

const styles =
	"w-80 h-9 rounded-md font-normal text-sm border-2 focus:outline-none focus:ring-2 focus:ring-violet-800 col-start-1 col-end-4";

function FormInput({ name, type, style, accept, register }: Props) {
	if (name === "name" || name === "category")
		return (
			<input
				id={name}
				type={type}
				className={`${styles} ${style}`}
				{...register(name, { required: "To pole jest wymagane." })}
			/>
		);
	if (name === "image")
		return (
			<input
				id={name}
				type={type}
				className={`${styles} ${style}`}
				accept={accept}
				{...register(name)}
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
					pattern: {
						value: /^(0|[1-9]\d*)(\.\d+)?$/,
						message: "Podana kwota jest nieprawidłowa.",
					},
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
}

export default FormInput;
