type Props = {
	children: React.ReactNode;
	handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Button({ children, handleClick }: Props) {
	return <button onClick={handleClick} className="px-2">{children}</button>;
}

export default Button;
