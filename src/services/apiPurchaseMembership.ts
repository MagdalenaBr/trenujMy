import { PurchasedMemberschipTypes } from "../types/purchaseMembershipTypes";
import { TODAY_DAY_END } from "../utils/constants";
import { START_DAY } from "../utils/helpers";
import supabase from "./supabase";

export async function getPurchasedMemberschips(
  selectedTimeRange: string | null,
): Promise<PurchasedMemberschipTypes[]> {
  let query = supabase
    .from("purchasedMemberships")
    .select("*, members(name, phone), gymMembership(price, gymMembershipName)");

  if (selectedTimeRange)
    query = query
      .lte("created_at", TODAY_DAY_END)
      .gte("created_at", START_DAY(selectedTimeRange));

  const { data: purchasedMemberships, error } = await query.order("startDay", {
    ascending: false,
  });

  if (error) throw new Error("Dane nie mogły zostać pobrane.");
  return purchasedMemberships;
}

export async function addOrEditMembershipPurchase(newData: {
  endDay: string;
  gymMembershipId: string;
  memberId: string;
  startDay: string;
}) {
  const { data, error } = await supabase
    .from("purchasedMemberships")
    .insert([newData])
    .select();

  if (error) throw new Error("Dane nie zostały dodane.");
  return data;
}

export async function getUserPurchasedMemberships(
  memberId: string,
): Promise<PurchasedMemberschipTypes[]> {
  const { data: purchasedMemberships, error } = await supabase
    .from("purchasedMemberships")
    .select("*, members(name, phone), gymMembership(price, gymMembershipName)")
    .eq("memberId", memberId)
    .order("startDay", { ascending: false });

  if (error) throw new Error("Dane nie mogły zostać pobrane.");
  return purchasedMemberships;
}

export async function cancelPurchase(value: boolean, id: string) {
  const { data, error } = await supabase
    .from("purchasedMemberships")
    .update({ isValid: value })
    .eq("id", id)
    .select();

  if (error) throw new Error("Karnet nie został anulowany.");
  return data;
}
