import { ARR_OF_GYM_MEMBERSHIP_ID } from "../utils/constants";
import supabase from "./supabase";

export async function getGymMembership() {
  const { data: gymMembership, error } = await supabase
    .from("gymMembership")
    .select("*")
    .order("id", { ascending: true });

  if (error) throw new Error("Dane nie mogły zostać pobrane.");

  return gymMembership;
}

export async function changeMembershipPrice(values: {
  1: number;
  2: number;
  3: number;
  4: number;
}) {
  const updatedValuesArr = ARR_OF_GYM_MEMBERSHIP_ID.map((id) => {
    return { id: id, price: values[id as keyof typeof values] };
  });

  const { data, error } = await supabase
    .from("gymMembership")
    .upsert(updatedValuesArr)
    .select();

  if (error) throw new Error("Cena nie została zmieniona.");

  return data;
}
