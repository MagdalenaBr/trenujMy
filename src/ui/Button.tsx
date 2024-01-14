type Props = {
	children: React.ReactNode
	styleType?: string;
	handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	type?: "submit" | "reset";
	styles?: string
};

function Button({ children, styleType, type, handleClick, styles }: Props) {
	return (
		<button
			type={type}
			onClick={handleClick}
			className={`px-6 py-3 rounded-3xl font-semibold m-3 tracking-wider ${styles} ${
				styleType === "add"
					? " bg-cyan-800 text-violet-100 px-12 "
					: "bg-violet-100 text-cyan-800 border-2 border-cyan-800"
			} `}>
			{children}
		</button>
	);
}

export default Button;
