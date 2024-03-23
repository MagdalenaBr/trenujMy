import supabase from "./supabase";

interface CommonDataTypes {
	city: string;
	email: string;
	gender: string;
	name: string;
	phone: string;
}

interface MembersType extends CommonDataTypes {
	created_at: string;
	endGymMembership: string;
	gymMembershipType: string;
	id: number;
	startGymMembership: string;
}

export async function getMembers() {
	const { data: members, error } = await supabase.from("members").select("*");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
 return members;
}

export async function addOrEditMember(
	newMember: CommonDataTypes,
	id?: number
): Promise<MembersType> {
	let query;
	/// ADD MEMBER
	if (!id) query = supabase.from("members").insert([{ ...newMember }]);
	// ///EDIT MEMBER
	if (id)
		query = supabase
			.from("members")
			.update({ ...newMember })
			.eq("id", id);

	if (query === undefined)
		throw new Error("Wystąpił błąd, dane klienta nie zostały dodane.");
	const { data, error } = await query.select().single();
	if (error) {
		throw new Error("Wystąpił błąd, dane klienta nie zostały dodane.");
	}
	return data;
}

export async function deleteMember(id: number) {
	const { error } = await supabase.from("members").delete().eq("id", id);
	if (error) {
		throw new Error("Wystapił błąd. Klient nie został usunięty.");
	}
}

// export async function getOneMember(id: number): Promise<MembersType>{
// 	// if (!id) return null;
// 	const { data: member, error } = await supabase
// 		.from("members")
// 		.select("id, name")
// 		.eq("id", id)
// 		.single();
// 	if (error) throw new Error("Klient nie został znaleziony.");
// 	console.log(member);
// 	return member;
// }
