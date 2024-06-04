import supabase from "./supabase";

interface PaymentsType {
  id: string;
  created_at: string;
  memberId: string;
  purchasedMembershipId: string;
  amount: number;
  isValid: boolean;
  purchasedMemberships: {
    created_at: string;
    price: number;
    gymMembership: {
      price: number;
      gymMembershipName: string;
      id: string;
    };
  };
  members: {
    name: string;
    phone: string;
  };
}

export async function getPayments(): Promise<PaymentsType[]> {
  const { data: payments, error } = await supabase
    .from("payments")
    .select(
      "*, members(name, phone), purchasedMemberships(created_at, price, gymMembership(gymMembershipName, price, id))",
    );

  if (error)
    throw new Error("Dane na temat płatności nie mogły zostać pobrane.");

  return payments;
}

export async function getUserPayments(
  memberId: string,
): Promise<PaymentsType[]> {
  const { data: userPayments, error } = await supabase
    .from("payments")
    .select(
      "*, members(name, phone), purchasedMemberships(created_at, price, gymMembership(gymMembershipName, price, id))",
    )
    .eq("memberId", memberId);

  if (error)
    throw new Error("Dane na temat płatności nie mogły zostać pobrane.");
  return userPayments;
}

export async function addPayment(newData: {
  memberId: string;
  purchasedMembershipId: string;
  amount: number;
}) {
  console.log(newData);
  const { data, error } = await supabase
    .from("payments")
    .insert([newData])
    .select();

  if (error) throw new Error("Dane nie zostały dodane.");
  return data;
}

export async function cancelPayment(value: boolean, id: string) {
  const { error } = await supabase
    .from("payments")
    .update({ isValid: value })
    .eq("id", id)
    .select();

  if (error) throw new Error("Płatność nie została anulowana.");
}
