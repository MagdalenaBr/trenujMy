
import supabase from "./supabase";

export async function getPayments() {
  const { data: payments, error } = await supabase
    .from("payments")
    .select(
      "*, members(name, phone), purchasedMemberships(created_at, gymMembership(gymMembershipName, price, id))",
    );

  if (error) throw new Error("Dane na temat płatności nie mogły zostać pobrane.");

  return payments;
}

export async function getUserPayments(memberId: string) {
  const { data: userPayments, error } = await supabase
    .from("payments")
    .select( "*, members(name, phone), purchasedMemberships(created_at, gymMembership(gymMembershipName, price, id))")
    .eq("memberId", memberId)

  if (error) throw new Error("Dane na temat płatności nie mogły zostać pobrane.");
  return userPayments;
}

export async function cancelPayment(value: boolean, id: string) {
  console.log(value, id);
  const {  error } = await supabase
    .from("payments")
    .update({ isValid: value })
    .eq("id", id)
    .select();

  if (error) throw new Error("Płatność nie została anulowana.");

}
