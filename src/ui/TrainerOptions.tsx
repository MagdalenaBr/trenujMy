import { Link } from "react-router-dom";
import { HiOutlineEllipsisVertical, HiOutlineCalendar } from "react-icons/hi2";
function TrainerOptions({id}) {
	return (
		<div className='flex gap-3 text-2xl justify-self-end px-5'>
			<Link to={`/trainers/${id}`}>
				<HiOutlineCalendar className=' text-violet-800' />
			</Link>
			<HiOutlineEllipsisVertical />
		</div>
	);
}
export default TrainerOptions;
