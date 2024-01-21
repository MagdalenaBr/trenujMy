import MainContainer from "../ui/MainContainer";
import MembersTable from "../features/members/MembersTable";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import AddMember from "../features/members/AddMember";
import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../services/apiMembers";
import Spinner from "../ui/Spinner";
function Members() {
	// const [showForm, setShowForm] = useState(false);

	const { isLoading } = useQuery({
		queryKey: ["members"],
		queryFn: getMembers,
	});
	return (
		<MainContainer title='Klienci'>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<div className='flex justify-between items-center '>
						<div className='relative'>
							<HiOutlineMagnifyingGlass className='absolute top-[25%] mx-2 text-xl  text-slate-800' />
							<input className='border-2 w-80 bg-slate-100 rounded-lg pl-8 pr-2 py-1 focus:border-cyan-800  focus:bg-sky-100 focus:outline-none transition-colors focus:shadow-md hover:border-cyan-800' />
						</div>
					</div>
					<MembersTable />
					<AddMember />
				</>
			)}
		</MainContainer>
	);
}

export default Members;
