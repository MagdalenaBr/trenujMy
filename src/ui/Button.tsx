type Props = {
	children: React.ReactNode;
	handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	styles?: string
};

function Button({ children, handleClick, styles }: Props) {
	return <button onClick={handleClick}   className={`border-2 self-start border-transparent px-1 py-1 text-2xl hover:border-activeBkg ${styles}`}>{children}</button>;
}

export default Button;
