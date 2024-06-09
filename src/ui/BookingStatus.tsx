function BookingStatus({ status }: {status: string}) {
	
let fontColor;
if(status === 'zrealizowana') fontColor = 'text-statusComplited'
if(status === 'anulowana') fontColor = 'text-statusCanceled'
if(status === 'niepotwierdzona') fontColor = 'text-statusUnconfirmed'
	return <p className={`px-2 py-1 rounded-2xl ${fontColor} uppercase font-semibold text-[11px] justify-self-start`}>{status}</p>;
}

export default BookingStatus;
