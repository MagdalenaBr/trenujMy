type Props = {
	children: React.ReactNode;
};

function Container({ children }: Props) {
	return (
		<div className='w-[60%] mx-auto bg-violet-50 rounded  border border-neutral-30 overflow-hidden'>
			{children}
		</div>
	);
}

export default Container;
