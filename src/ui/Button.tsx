type Props = {
	children: React.ReactNode;
	handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Button({ children, handleClick }: Props) {
	return <button onClick={handleClick}   className="rounded-md border-2 self-start border-transparent px-1 py-1 text-2xl hover:border-activeBkg">{children}</button>;
}

export default Button;
