import { LiaCatSolid } from "react-icons/lia";

function Logo() {
	return (
		<div>
			<h1 className='flex gap-1 items-center text-3xl  text-slate-200'>
				TrenujMy
				<span>
					<LiaCatSolid className='text-4xl text-slate-200' />
				</span>
			</h1>
		</div>
	);
}

export default Logo;
