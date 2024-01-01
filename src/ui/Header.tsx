import { NavLink } from "react-router-dom";

import { HiOutlineUser, HiOutlineMoon } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import Logo from "./Logo";

function Header() {
	return (
		<header className='flex justify-between py-5 px-7 bg-neutral-100 row-[1_/_2] col-[1_/_3] sticky top-0'>
			<Logo/>
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
