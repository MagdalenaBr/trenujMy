import { useQuery } from "@tanstack/react-query";
import { BsInfoLg } from "react-icons/bs";

import { getMembers } from "../../services/apiMembers";
import Table from "../../ui/Table";
import TableNoContent from "../../ui/TableNoContent";
import { Link } from "react-router-dom";

type MemberType ={
	id?: number;
	email: string;
	name: string;
	phone: string;
	gender: string;
	city: string;
	startGymMembership?: string | null;
	endGymMembership?: string | null;
}


function MembersTable({members}: MemberType) {
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
						<p>{member.email.toLowerCase()}</p>
						<p>{member.phone}</p>
						<Link to={`/members/${member.id}`}>
							<BsInfoLg
								className='text-2xl  text-slate-800 justify-self-end mx-3 cursor-pointer hover:scale-125 transition hover:text-cyan-800'
							/>
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
