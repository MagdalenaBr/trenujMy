import { NavLink } from "react-router-dom";
import {
	HiOutlineHome,
	HiOutlineTrophy,
	HiOutlineCalendarDays,
	HiOutlineUserGroup,
	HiOutlineUser,
} from "react-icons/hi2";

function Sidebar() {
	return (
		<nav className='bg-neutral-100 row-[2_/_3] col-[1_/_2] sticky t-0 border-t-2'>
			<ul className='flex flex-col gap-5 px-7 pt-9'>
				<li>
					<NavLink to='/' className='flex  items-center gap-2 text-xl'>
						<HiOutlineHome />
						<span>Start</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/trainers' className='flex items-center gap-2 text-xl'>
						<HiOutlineTrophy />
						<span>Trenerzy</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/bookings' className='flex items-center gap-2 text-xl'>
						<HiOutlineCalendarDays />
						<span>Rezerwacje</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/members' className='flex items-center gap-2 text-xl'>
						<HiOutlineUserGroup />
						<span>Klienci</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/users' className='flex items-center gap-2 text-xl'>
						<HiOutlineUser />
						<span>Użytkownicy</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Sidebar;
