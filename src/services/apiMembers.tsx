import supabase from "./supabase";

type MemberType = {
	id: number;
	email: string;
	name: string;
	phone: number;
};
 
export async function getMembers(): Promise<MemberType[]>{
	const { data: members, error } = await supabase.from("members").select("*");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	return members;
}