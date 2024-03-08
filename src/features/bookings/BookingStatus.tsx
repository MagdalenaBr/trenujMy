function BookingStatus({ status }: {status: string}) {
	
let fontColor;
if(status === 'zrealizowana') fontColor = 'text-lime-500'
if(status === 'anulowana') fontColor = 'text-red-600'
if(status === 'niepotwierdzona') fontColor = 'text-slate-500'
	return <p className={`bg-blue-200 px-2 py-1 rounded-2xl ${fontColor} uppercase font-semibold text-[11px] justify-self-start`}>{status}</p>;
}

export default BookingStatus;
