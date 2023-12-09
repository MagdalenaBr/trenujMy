type Props = {
	children: string;
	styleType: string;
	handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Button({ children, styleType, type, handleClick }: Props) {
	return (
		<button
			type={type}
			onClick={handleClick}
			className={`px-4 py-2 rounded-lg font-semibold mt-3 tracking-wider ${
				styleType === "add"
					? " bg-green-800 text-green-50 4 px-8 "
					: "bg-green-50 text-green-800 border-2 border-green-800"
			} `}>
			{children}
		</button>
	);
}

export default Button;
