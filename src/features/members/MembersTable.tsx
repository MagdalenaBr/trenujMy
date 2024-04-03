import { BsInfoLg } from "react-icons/bs";
import Table from "../../ui/Table";
import TableNoContent from "../../ui/TableNoContent";
import { Link } from "react-router-dom";
import { useMembers } from "./useMembers";



function MembersTable({ memberNameFromInput }: {memberNameFromInput: string}) {
	const { members } = useMembers();
	const filteredMembers = members?.filter(member =>
		member.name.toLowerCase().includes(memberNameFromInput.toLocaleLowerCase())
			? member
			: ""
	);

	return (
		<Table uniqueStyles="px-2 py-2" columns="grid-cols-[2fr_1fr_1fr_1fr]">
			<Table.Header>
				<p>Imie i nazwisko</p>
				<p>e-mail</p>
				<p>telefon</p>
			</Table.Header>
			{filteredMembers ? (
				filteredMembers.map(member => (
					<Table.Row key={member.id}>
						<p className="text-violet-200 font-semibold">{member.name}</p>
						<p>{member.email.toLowerCase()}</p>
						<p>{member.phone}</p>
						<Link to={`/members/${member.id}`}>
							<BsInfoLg className='text-2xl  text-accentColor2 justify-self-end mx-3 cursor-pointer hover:scale-125 hover:text-cyan-800' />
						</Link>
					</Table.Row>
				))
			) : (
				<TableNoContent />
			)}
		</Table>
	);
}

export default MembersTable;
