type PropsType = {
	handleCloseModal?: () => void;
	handleDeleteItem?: () => void;
};

function DeletePopup({ handleDeleteItem, handleCloseModal }: PropsType) {
	return (
		<div className='w-[20%] mx-auto bg-slate-50  border border-neutral-30 overflow-hidden  p-7 text-center'>
			<p className='pb-7 font-bold text-xl'>Czy chcesz usunąć dane?</p>
			<div>
				<button
					type='reset'
					onClick={handleCloseModal}
					className='uppercase px-6 py-2 mx-4 font-bold border-2  border-red-600 '>
					Nie
				</button>
				<button
					onClick={handleDeleteItem}
					className='uppercase px-6 py-2 mx-4 bg-red-600 text-red-50 font-bold'>
					Tak
				</button>
			</div>
		</div>
	);
}

export default DeletePopup;
