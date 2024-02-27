import supabase from "./supabase";

export async function getBookings() {
	const { data: bookings, error } = await supabase
		.from("bookings")
		.select("*, trainers(name), members(name, phone)");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	return bookings;
}

export async function addOrEditBooking(newBooking, id?) {
	console.log(newBooking, id);

	const newBookingData = {
		date: newBooking.date,
		status: newBooking.status,
		trainerId: newBooking.trainerId,
		memberId: newBooking.memberId,
	};
	let query;
	/// ADD MEMBER
	if (!id) query = supabase.from("bookings").insert([{ ...newBookingData }]);

	// ///EDIT MEMBER
	if (id)
		query = supabase
			.from("bookings")
			.update({ ...newBookingData })
			.eq("id", id);

	if (query === undefined)
		throw new Error("Wystąpił błąd, rezerwacja nie została dodana.");
	console.log(query);
	const { data, error } = await query.select().single();
	if (error) {
		throw new Error("Wystąpił błąd, rezerwacja nie została dodana.");
	}
	return data;
}

export async function getBooking(id: number) {
	// console.log(id);
	// if (!id) return null;
	const { data: booking, error } = await supabase
		.from("bookings")
		.select("*, trainers(name), members(name, phone)")
		.eq("trainerId", id);
	if (error) throw new Error("Wystąpił błąd podczas wyszukiwania rezerwacji. Spróbuj ponownie.");
	console.log(booking);
	return booking;
}
