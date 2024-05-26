import supabase from "./supabase";

interface PaymentsType {
  endDay: string;
  startDay: string;
  price:number;
  isValid: boolean;
  gymMembership: {
    price: number;
    gymMembershipName: string;
  };
  gymMembershipId: string;
  id: string;
  memberId: string;
  members: {
    name: string;
    phone: string;
    startDay: string;
  };
}
[];

export async function getPurchasedMemberschips(): Promise<PaymentsType[]> {
  const { data: payments, error } = await supabase
    .from("payments")
    .select("*, members(name, phone), gymMembership(price, gymMembershipName)")
    .order("startDay", { ascending: false });
  if (error) throw new Error("Dane nie mogły zostać pobrane.");
  return payments;
}

export async function addOrEditMembershipPurchase(newData: {
  endDay: string;
  gymMembershipId: string;
  memberId: string;
  startDay: string;
}) {
  console.log(newData);
  const { data, error } = await supabase
    .from("payments")
    .insert([newData])
    .select();

  if (error) throw new Error("Dane nie zostały dodane.");
  return data;
}

export async function getUserPurchasedMemberships(
  memberId: string,
): Promise<PaymentsType[]> {
  const { data: payments, error } = await supabase
    .from("payments")
    .select("*, members(name, phone), gymMembership(price, gymMembershipName)")
    .eq("memberId", memberId)
    .order("startDay", { ascending: false });

  if (error) throw new Error("Dane nie mogły zostać pobrane.");
  return payments;
}

export async function cancelPurchase(value: boolean, id: string) {
  const { data, error } = await supabase
    .from("payments")
    .update({ isValid: value })
    .eq("id", id)
    .select();

  if (error) throw new Error("Karnet nie został anulowany.");

  return data;
}
