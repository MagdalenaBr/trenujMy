import { NavLink } from "react-router-dom";
import {
	HiOutlineHome,
	HiOutlineTrophy,
	HiOutlineCalendarDays,
	HiOutlineUserGroup,
	HiOutlineUser,
	HiOutlinePencilSquare ,
} from "react-icons/hi2";

function Sidebar() {
	return (
		<nav className='bg-slate-100 row-[2_/_3] col-[1_/_2] sticky t-0'>
			<ul className='flex flex-col gap-5 px-7 pt-9'>
				<li>
					<NavLink to='/' className='flex  items-center gap-2 text-xl'>
						<HiOutlineHome className='text-slate-600 font-extrabold text-3xl' />
						<span>Start</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/trainers' className='flex items-center gap-2 text-xl'>
						<HiOutlineTrophy className='text-slate-600 font-extrabold text-3xl' />
						<span>Trenerzy</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/bookings' className='flex items-center gap-2 text-xl'>
						<HiOutlinePencilSquare  className='text-slate-600 font-extrabold text-3xl' />
						<span>Rezerwacje</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/members' className='flex items-center gap-2 text-xl'>
						<HiOutlineUserGroup className='text-slate-600 font-extrabold text-3xl' />
						<span>Klienci</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/users' className='flex items-center gap-2 text-xl'>
						<HiOutlineUser className='text-slate-600 font-extrabold text-3xl' />
						<span>Użytkownicy</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/schedule' className='flex items-center gap-2 text-xl'>
						<HiOutlineCalendarDays className='text-slate-600 font-extrabold text-3xl' />
						<span>Grafik</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Sidebar;
