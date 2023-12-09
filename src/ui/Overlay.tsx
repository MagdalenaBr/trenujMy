type Props = {
	children: React.ReactNode;
};

function Overlay({ children }: Props) {
	return (
		<div className='fixed w-screen h-screen inset-0 bg-neutral-500 bg-opacity-80 '>
			<div className='flex justify-center items-center h-full'>{children}</div>
		</div>
	);
}

export default Overlay;
