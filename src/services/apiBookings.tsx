import supabase from "./supabase";
interface NewBookingTypes {
  status: string;
  trainerId: number;
  memberId: number;
  date: string;
}
interface BookingsDataType extends NewBookingTypes {
  id: number;
  created_at: string;
  trainers: {
    name: string;
  };
  members: {
    name: string;
    phone: string;
  };
}
interface AddOrEditDataTypes extends NewBookingTypes {
  id: number;
}

export async function getBookings(sortValue: {
  name: string;
  value: string | null;
}): Promise<BookingsDataType[]> {
  console.log(sortValue);
  let query = supabase
    .from("bookings")
    .select("*, trainers(name), members(name, phone)");
  if (sortValue.value === null)
    query = query.order("date", { ascending: false });

  if (sortValue.value !== null)
    query = query
      .eq(sortValue.name, sortValue.value)
      .order("date", { ascending: false });

  if (query === undefined)
    throw new Error("Wystąpił błąd, dane nie mogą zostać załadowane.");

  const { data: bookings, error } = await query;
  if (error) throw new Error("Dane nie mogą zostać załadowane.");
  return bookings;
}

export async function addOrEditBooking(
  newBooking: NewBookingTypes,
  id?: number,
): Promise<AddOrEditDataTypes> {
  const { date, status, trainerId, memberId } = newBooking;
  const newBookingData = {
    date,
    status,
    trainerId,
    memberId,
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
  const { data, error } = await query.select().single();
  if (error) {
    throw new Error("Wystąpił błąd, rezerwacja nie została dodana.");
  }
  return data;
}

export async function getBooking(
  id: number,
  columnName: string,
): Promise<BookingsDataType[]> {
  const { data: booking, error } = await supabase
    .from("bookings")
    .select("*, trainers(name), members(name, phone)")
    .eq(columnName, id);
  if (error)
    throw new Error(
      "Wystąpił błąd podczas wyszukiwania rezerwacji. Spróbuj ponownie.",
    );

  return booking;
}
