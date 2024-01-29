type Props = {
	children: React.ReactNode;
	handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Button({ children, handleClick }: Props) {
	return <button onClick={handleClick}>{children}</button>;
}

export default Button;
