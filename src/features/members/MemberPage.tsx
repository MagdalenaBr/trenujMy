import { useParams } from "react-router-dom";
import Container from "../../ui/Container";

import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../../services/apiMembers";

import { HiOutlinePencil } from "react-icons/hi2";

import BackButton from "../../ui/BackButton";
import MemberOptions from "./MemberOptions";

function MemberPage() {
	const memberIdParams = useParams();
	const memberId = Number(memberIdParams.memberId);
	const members = useQuery({
		queryKey: ["members"],
		queryFn: getMembers,
	});
	const member = members.data?.find(member => member.id === memberId);
	if (member === undefined) return null;

	return (
		<Container>
			<div>
				<div className='flex flex-col gap-4'>
					<h2 className='uppercase  font-bold'>{member.name}</h2>
					<div className='flex gap-2'>
						<h3 className='font-semibold'>E-mail:</h3>
						<p>{member.email.toLowerCase()}</p>
					</div>
					<div className='flex gap-2'>
						<h3 className='font-semibold'>Telefon:</h3>
						<p>{member.phone}</p>
					</div>
					<div className='flex gap-2'>
						<h3 className='font-semibold'>Płeć:</h3>
						<p>{member.gender}</p>
					</div>
					<div className='flex gap-2'>
						<h3 className='font-semibold'>Miasto:</h3>
						<p>{member.city}</p>
					</div>
					<div className='flex gap-2'>
						<h3 className='font-semibold text-cyan-800'>Wykupiony karnet:</h3>
						<p>
							{member.startGymMembership === null ? (
								<span>brak</span>
							) : (
								<div>
									<span>{member.startGymMembership}</span> do{" "}
									<span>{member.endGymMembership}</span>
								</div>
							)}
						</p>
						<button>
							<HiOutlinePencil className='text-lg cursor-pointer text-red-800 hover:scale-125 active:scale-125 transition' />
						</button>
					</div>
				</div>
				<div>
					<BackButton />
				</div>
			</div>
			<MemberOptions member={member} />
		</Container>
	);
}

export default MemberPage;
