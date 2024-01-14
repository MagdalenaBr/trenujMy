import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../../services/apiMembers";
import Table from "../../ui/Table";
import TableNoContent from "../../ui/TableNoContent";
import { HiOutlinePencilSquare } from "react-icons/hi2";


function MembersTable() {
	const { data: members } = useQuery({
		queryKey: ["members"],
		queryFn: getMembers,
	});
	console.log(members);
	return (
		<Table>
			<Table.Header>
				<p>Imie i nazwisko</p>
				<p>e-mail</p>
				<p>telefon</p>
			</Table.Header>
			{members ? (
				members.map(member => (
					<Table.Row key={member.id}>
						<p>{member.name}</p>
						<p>{member.email}</p>
						<p>{member.phone}</p>
						<HiOutlinePencilSquare className="text-2xl  text-slate-800 justify-self-end mx-3"/>
					</Table.Row>
				))
			) : (
				<TableNoContent />
			)}
		</Table>
	);
}

export default MembersTable;
