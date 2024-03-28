type Props = {
	children: React.ReactNode
	styleType?: string;
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: "submit" | "reset";
	styles?: string
};

function StyledButton({ children, styleType, type, handleClick, styles }: Props) {
	return (
		<button
			type={type}
			onClick={handleClick}
			className={`px-6 py-3 my-4 rounded-xl font-semibold tracking-wider hover:scale-105 transition ${styles} ${
				styleType === "add"
					? "bg-accentColor1 text-violet-100 px-12 "
					: "bg-violet-100 text-cyan-800 border-2 border-cyan-800"
			} `}>
			{children}
		</button>
	);
}

export default StyledButton;
