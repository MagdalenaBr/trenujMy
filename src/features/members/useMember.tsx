import { useQuery } from "@tanstack/react-query";
import { getOneMember } from "../../services/apiMembers";

export function useMember(id) {
	const { data: selectedMember } = useQuery({
		queryKey: ["members", id],
		queryFn: () => getOneMember(id),
	});

	return { selectedMember };
}
