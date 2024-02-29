type PropsType = {
	title: string;
	children: React.ReactNode;
	button?: React.ReactNode;
};

function MainContainer({ children, title, button }: PropsType) {
	return (
		<div className='w-[60%] mx-auto'>
			<div className={button? 'flex justify-between' : ''}>
				<h2 className='text-[2rem] text-start mb-5'>{title}</h2>
				{button}
			</div>
			{children}
		</div>
	);
}

export default MainContainer;
