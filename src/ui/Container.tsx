type Props = {
	children: React.ReactNode;
};

function Container({ children }: Props) {
	return (
		<div className='w-[60%] mx-auto bg-slate-50 rounded  border border-neutral-30 overflow-hidden flex flex-col gap-10 p-4'>
			{children}
		</div>
	);
}

export default Container;
