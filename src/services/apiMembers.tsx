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
};

export async function getMembers(): Promise<MemberType[]> {
	const { data: members, error } = await supabase.from("members").select("*");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	return members;
}

export async function addOrEditMember(newMember: MemberType, id?: number) {
	console.log(newMember, id);
	let query = supabase.from("members");

	/// ADD MEMBER
	if (!id) query = query.insert([{ ...newMember }]);

	///EDIT MEMBER
	if (id) query = query.update({ ...newMember }).eq("id", id);
	

	const { data, error } = await query.select().single();
	if (error) throw new Error("Wystąpił błąd, dane klienta nie zostały dodane.");
	return data;
}

export async function deleteMember(id: number | undefined) {
	const { error } = await supabase.from("members").delete().eq("id", id);
	if (error) {
		throw new Error("Wystapił błąd. Klient nie został usunięty.");
	}
}
