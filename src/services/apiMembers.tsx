import supabase from "./supabase";

type MemberType = {
	id?: number;
	email: string;
	name: string;
	phone: string;
	gender: string;
	city: string;
	startGymMembership?: string | null;
	endGymMembership?: string | null;
	gymMembershipType?: string | null;
};

export async function getMembers(): Promise<MemberType[]> {
	const { data: members, error } = await supabase.from("members").select("*");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	console.log(members);
	console.log(typeof members[0].phone);
	return members;
}

export async function addOrEditMember(newMember: MemberType, id?: number) {
	console.log(newMember, id);

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

	console.log(query);
	const { data, error } = await query.select().single();
	if (error) {
		throw new Error("Wystąpił błąd, dane klienta nie zostały dodane.");
	}
	return data;
}

export async function deleteMember(id: number | undefined) {
	const { error } = await supabase.from("members").delete().eq("id", id);
	if (error) {
		throw new Error("Wystapił błąd. Klient nie został usunięty.");
	}
}

export async function getOneMember(id: number) {
	if (!id) return null;
	const { data: member, error } = await supabase
		.from("members")
		.select("id, name")
		.eq("id", id)
		.single();
	if (error) throw new Error("Klient nie został znaleziony.");
	return member;
}
