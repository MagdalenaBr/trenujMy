type Props = {
	children: React.ReactNode;
};

function Container({ children }: Props) {
	return (
		<div className='w-[60%] mx-auto bg-violet-50 rounded  border border-neutral-30 overflow-hidden flex flex-col gap-20 p-4'>
			{children}
		</div>
	);
}

export default Container;
