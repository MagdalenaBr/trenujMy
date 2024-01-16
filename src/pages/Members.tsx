import { useState } from "react";
import Button from "../ui/Button";
import MainContainer from "../ui/MainContainer";
import MembersTable from "../features/members/MembersTable";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import AddMemberForm from "../features/members/AddMemberForm";
function Members() {
	const [showForm, setShowForm] = useState(false);
	return (
		<MainContainer title='Klienci'>
			<div className='flex justify-between items-center '>
				<div className='relative'>
					<HiOutlineMagnifyingGlass className='absolute top-[25%] mx-2 text-xl  text-slate-800' />
					<input className='border-2 w-80 bg-slate-100 rounded-lg pl-8 pr-2 py-1 focus:border-cyan-800  focus:bg-sky-100 focus:outline-none transition-colors focus:shadow-md hover:border-cyan-800' />
				</div>
				<Button styleType='add' handleClick={() => setShowForm(!showForm)}>
					Dodaj klienta
				</Button>
			</div>
			<MembersTable />
			{showForm && <AddMemberForm onCloseForm={()=> setShowForm(false)} />}
		</MainContainer>
	);
}

export default Members;
