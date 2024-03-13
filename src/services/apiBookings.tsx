import supabase from "./supabase";

type BookingType = {
	id?: number;
	date: string;
	status: string;
	trainerId: number;
	memberId: number;
};

type GetBookingType = {
	date: string;
	id: number;
	memberId: number;
	members: {
		name: string;
		phone: number;
	};
	status: string;
	trainerId: number;
	trainers: {
		name: string;
	};
}[];

export async function getBookings() {
	const { data: bookings, error } = await supabase
		.from("bookings")
		.select("*, trainers(name), members(name, phone)");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	console.log(typeof bookings[0].date);
	return bookings;
}

export async function addOrEditBooking(newBooking: BookingType, id?: number) {
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

export async function getBooking(
	id: number,
	columnName: string
): Promise<GetBookingType> {
	const { data: booking, error } = await supabase
		.from("bookings")
		.select("*, trainers(name), members(name, phone)")
		.eq(columnName, id);
	if (error)
		throw new Error(
			"Wystąpił błąd podczas wyszukiwania rezerwacji. Spróbuj ponownie."
		);
	return booking;
}
