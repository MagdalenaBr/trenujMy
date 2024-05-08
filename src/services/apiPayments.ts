import supabase from "./supabase";

export async function getPayments() {
  const { data: payments, error } = await supabase
    .from("payments")
    .select("*, members(name, phone), gymMembership(price, gymMembershipName)");
  if (error) throw new Error("Dane nie mogły zostać pobrane.");
  return payments;
}
