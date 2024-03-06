import { HiOutlinePencil } from "react-icons/hi2";
import { useSchedules } from "./useSchedules";
import MainContainer from "../../ui/MainContainer";

export default function EditSchedulePage() {
	const { schedule } = useSchedules();
	console.log(schedule);

	return (
		<MainContainer title='Aktualny grafik'>
			<div role='table'>
				<div
					role='row'
					className='grid grid-cols-[repeat(4,minmax(100px,_1fr))_100px] border-2 rounded-md bg-slate-200 font-bold mb-4 py-1'>
					<p>Trener</p>
					<p>Kategoria</p>
					<p>Data</p>
					<p>Dostępne miejsca</p>
				</div>

				{schedule?.map(el => (
					<div key={el.id} className='my-2 bg-slate-100 border-2  border-slate-200 rounded-md py-1 text-sm'>
						<div className='grid px-2 grid-cols-[repeat(4,minmax(100px,_1fr))_100px] items-center'>
							<p className='font-bold  text-slate-700 text-start'>
								{el.trainers.name}
							</p>
							<p>{el.name}</p>
							<div>
								<p>{el.date.slice(0, -3).split("T")[0]}</p>
								<p className='text-slate-600 text-sm'>
									{el.date.slice(0, -3).split("T")[1]}
								</p>
							</div>
							<p>{el.numOfPlaces}</p>
							<button>
								<HiOutlinePencil className='text-2xl text-slate-600' />
							</button>
						</div>
					</div>
				))}
			</div>
		</MainContainer>
	);
}
