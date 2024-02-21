import supabase from "./supabase";


export async function getBookings(){
	const { data: bookings, error } = await supabase.from("bookings").select("*, trainers(name), members(name, phone)");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	return bookings;
}

export async function addOrEditBooking(newBooking, id?) {
	console.log(newBooking, id);
	let query;
	/// ADD MEMBER
	if (!id) query = supabase.from("bookings").insert([{ ...newBooking }]);

	// ///EDIT MEMBER
	if (id)
		query = supabase
			.from("bookings")
			.update({ ...newBooking })
			.eq("id", id);

	if (query === undefined)
		throw new Error("Wystąpił błąd, rezerwacja nie została dodana.");

	const { data, error } = await query.select().single();
	if (error) {
		throw new Error("Wystąpił błąd, rezerwacja nie została dodana.");
	}
	return data;
}