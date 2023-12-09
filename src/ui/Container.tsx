type Props = {
	children: React.ReactNode;
};

function Container({ children }: Props) {
	return (
		<div className='w-[60%] mx-auto bg-neutral-100 rounded divide-y  border border-neutral-30 overflow-hidden'>
			{children}
		</div>
	);
}

export default Container;
