import supabase from "./supabase";

export async function getGymMembership() {
  const { data: gymMembership, error } = await supabase
    .from('gymMembership')
    .select("*");

  if (error) throw new Error("Dane nie mogły zostać pobrane.");

  return gymMembership;
}
