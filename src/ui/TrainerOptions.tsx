import { Link } from "react-router-dom";
import { HiOutlineEllipsisVertical, HiOutlineCalendar } from "react-icons/hi2";
function TrainerOptions() {
	return (
		<div className='flex gap-3 text-2xl justify-self-end px-5'>
			<Link to='/trainers/trainer'>
				<HiOutlineCalendar className=' text-green-800' />
			</Link>
			<HiOutlineEllipsisVertical />
		</div>
	);
}
export default TrainerOptions;
