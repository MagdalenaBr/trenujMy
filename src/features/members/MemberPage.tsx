import { useNavigate, useParams } from "react-router-dom";
import Container from "../../ui/Container";

import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../../services/apiMembers";

import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { useDeleteMember } from "./useDeleteMember";
function MemberPage() {
	const memberIdParams = useParams();
	const navigate = useNavigate();
	const { deleteOneMember } = useDeleteMember();
	const memberId = Number(memberIdParams.memberId);

	const members = useQuery({
		queryKey: ["members"],
		queryFn: getMembers,
	});
	const member = members.data?.find(member => member.id === memberId);

	if (member === undefined) return;



	return (
		<Container>
			<div className='flex flex-col gap-4'>
				<h2 className='uppercase  font-bold'>{member.name}</h2>
				<div className='flex gap-2'>
					<h3 className='font-semibold'>E-mail:</h3>
					<p>{member.email}</p>
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
						<span>{member.startGymMembership}</span> -{" "}
						<span>{member.endGymMembership}</span>
					</p>
					<button>
						<HiOutlinePencil className='text-lg cursor-pointer text-red-800 hover:scale-125 active:scale-125 transition' />
					</button>
				</div>
			</div>
			<div className='flex gap-3 text-3xl px-5  text-red-800'>
				<button>
					<HiOutlinePencil />
				</button>
				<button
					onClick={() => {
						deleteOneMember(member.id);
						navigate(-1);
					}}>
					<HiOutlineTrash />
				</button>
			</div>
		</Container>
	);
}

export default MemberPage;
