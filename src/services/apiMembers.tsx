import { CommonMemberDataTypes, MembersType } from "../types/membersTypes";
import supabase from "./supabase";

export async function getMembers() {
  const { data: members, error } = await supabase.from("members").select("*");
  if (error) throw new Error("Dane nie mogą zostać załadowane.");
  return members;
}

export async function addOrEditMember(
  newMember: CommonMemberDataTypes,
  id?: string,
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

export async function deleteMember(id: string) {
  const { error } = await supabase.from("members").delete().eq("id", id);
  if (error) {
    throw new Error("Wystapił błąd. Klient nie został usunięty.");
  }
}
