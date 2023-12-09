import { NavLink } from "react-router-dom";
import { LiaCatSolid } from "react-icons/lia";
import { HiOutlineUser, HiOutlineMoon } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";

function Header() {
	return (
		<header className='flex justify-between py-5 px-7 bg-neutral-100 row-[1_/_2] col-[1_/_3] sticky top-0'>
			<div>
				<h1 className='flex gap-1 items-center text-3xl'>
					TrenujeMy
					<span>
						<LiaCatSolid className='text-4xl text-green-800' />
					</span>
				</h1>
			</div>
			<div>
				<div className='flex gap-2 items-center text-xl'>
					<p>bronxx</p>
					<NavLink>
						<HiOutlineUser />
					</NavLink>
					<NavLink>
						<HiOutlineMoon />
					</NavLink>
					<NavLink>
						<IoLogOutOutline />
					</NavLink>
				</div>
			</div>
		</header>
	);
}

export default Header;
