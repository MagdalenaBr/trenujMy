function ChangeOpenHours({handleClick}) {
	return (
		<button onClick={handleClick} className='uppercase text-cyan-800 border-cyan-800 border-2 px-2 py-1 mb-4 rounded-md font-bold self-center'>
			Zmień godziny otwarcia
		</button>
	);
}
export default ChangeOpenHours;
