
type PropsType = {
	title: string;
	children: React.ReactNode;
};

function MainContainer({ children, title } :PropsType) {
	return (
		<div className='w-[60%] mx-auto'>
			<h2 className='text-[2rem] text-start mb-5'>{title}</h2>
			{children}
		</div>
	);
}

export default MainContainer;
