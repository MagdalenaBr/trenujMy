type PropsType = {
	title: string;
	children: React.ReactNode;
	buttons?: React.ReactNode;
};

function MainContainer({ children, title, buttons }: PropsType) {
	return (
		<div className='w-[80%] mx-auto flex flex-col relative'>
			<div className={buttons? 'flex justify-between' : ''}>
				<h2 className='text-[2rem] text-start mb-5 text-primaryTextColor'>{title}</h2>
				{buttons}
			</div>
			{children}
		</div>
	);
}

export default MainContainer;
