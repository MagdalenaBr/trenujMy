type Props = {
	children: string;
	styleType: string;
	handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	type?: "submit" | "reset";
	styles?: string
};

function Button({ children, styleType, type, handleClick, styles }: Props) {
	return (
		<button
			type={type}
			onClick={handleClick}
			className={`px-6 py-3 rounded-3xl font-semibold mt-3 tracking-wider ${styles} ${
				styleType === "add"
					? " bg-violet-600 text-violet-100 px-12 "
					: "bg-violet-100 text-violet-900 border-2 border-violet-900"
			} `}>
			{children}
		</button>
	);
}

export default Button;
