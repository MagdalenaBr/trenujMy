import supabase from "./supabase";


export async function getBookings(){
	const { data: bookings, error } = await supabase.from("bookings").select("*, trainers(name), members(name, phone)");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	return bookings;
}