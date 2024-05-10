import supabase from "./supabase";

export async function getPayments() {
  const { data: payments, error } = await supabase
    .from("payments")
    .select("*, members(name, phone), gymMembership(price, gymMembershipName)");
  if (error) throw new Error("Dane nie mogły zostać pobrane.");
  return payments;
}

export async function addOrEditPayments(newData) {
  console.log(newData);
  const { data, error } = await supabase
    .from("payments")
    .insert([{...newData}])
    .select();

  if (error) throw new Error("Dane nie zostały dodane.");
  return data;
}
