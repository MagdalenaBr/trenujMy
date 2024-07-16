function BookingStatus({ status }: {status: string}) {
	
let fontColor;
if(status === 'zrealizowana') fontColor = 'text-confirmStatus'
if(status === 'anulowana') fontColor = 'text-cancelStatus'
if(status === 'niepotwierdzona') fontColor = 'text-disabledStatus'
	return <p className={`px-2 py-1  ${fontColor} uppercase font-semibold text-[11px] justify-self-start`}>{status}</p>;
}

export default BookingStatus;
