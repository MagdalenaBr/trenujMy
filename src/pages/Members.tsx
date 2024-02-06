import MainContainer from "../ui/MainContainer";
import MembersTable from "../features/members/MembersTable";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import AddMember from "../features/members/AddMember";
import Spinner from "../ui/Spinner";
import { useState } from "react";
import { useMember } from "../features/members/useMember";
function Members() {
	const [memberName, setMemberName] = useState("");
	const { members, isLoading } = useMember();

	const filteredMembers = members?.filter(member =>
		member.name.toLowerCase().includes(memberName.toLocaleLowerCase())
			? member
			: ""
	);

	return (
		<MainContainer title='Klienci'>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<div className='flex justify-between items-center mb-4'>
						<div className='relative'>
							<HiOutlineMagnifyingGlass className='absolute top-[25%] mx-2 text-xl  text-slate-800' />
							<input
								value={memberName}
								onChange={e => setMemberName(e.target.value)}
								className='border-2 w-80 bg-slate-100 rounded-lg pl-8 pr-2 py-1 focus:border-cyan-800  focus:bg-sky-100 focus:outline-none transition-colors focus:shadow-md hover:border-cyan-800'
							/>
						</div>
					</div>
					{/* <MemberSearch/> */}
					<MembersTable members={filteredMembers} />
					<AddMember />
				</>
			)}
		</MainContainer>
	);
}

export default Members;
