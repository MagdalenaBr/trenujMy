
import { NUM_OF_RESULTS, TODAY_DAY_END } from "../utils/constants";
import { START_DAY } from "../utils/helpers";
import supabase from "./supabase";
interface NewBookingTypes {
  status: string;
  trainerId: string;
  memberId: string;
  date: string;
}
interface BookingsDataType extends NewBookingTypes {
  id: string;
  created_at: string;
  trainers: {
    name: string;
    category: string;
  };
  members: {
    name: string;
    phone: string;
  };
}

interface GetBookingType {
  data: BookingsDataType[];
  count: number | null;
}
interface AddOrEditDataTypes extends NewBookingTypes {
  id: string;
}

 interface BookingsAfterDateTypes {
  id: string;
  date: string;
  status: string;
  trainers: {
    id: string;
    name: string;
    category: string;
  };
  members: {
    name: string;
    phone: string
  }
}



export async function getBookings(
  sortByDateValue: {
    name: string;
    value: string | null;
  },
  sortByStatusValue: {
    name: string;
    value: string | null;
  },
  currentPage: number,
): Promise<GetBookingType> {
  let query = supabase
    .from("bookings")
    .select("*, trainers(name, category), members(name, phone)", {
      count: "exact",
    });

  // if(sortByStatusValue.value) {currentPage = 1}

  //WITHOUT SORTING
  if (sortByStatusValue.value === null && sortByDateValue.value === null)
    query = query.order("date", { ascending: false });

  //SORTED BY STATUS
  if (sortByStatusValue.value !== null && sortByDateValue.value === null)
    query = query
      .eq(sortByStatusValue.name, sortByStatusValue.value)
      .order(sortByDateValue.name, { ascending: false });

  //SORTED BY DATE
  if (sortByStatusValue.value === null && sortByDateValue.value !== null)
    query = query.order("date", { ascending: true });

  //SORTED BY DATE AND STATUS
  if (sortByStatusValue.value !== null && sortByDateValue.value !== null)
    query = query
      .eq(sortByStatusValue.name, sortByStatusValue.value)
      .order(sortByDateValue.name, { ascending: true });

  //PAGINATION
  if (currentPage)
    query = query.range(
      (currentPage - 1) * NUM_OF_RESULTS,
      currentPage * NUM_OF_RESULTS - 1,
    );

  if (query === undefined)
    throw new Error("Wystąpił błąd, dane nie mogą zostać załadowane.");

  const { data, count, error } = await query;

  if (error) throw new Error("Dane nie mogą zostać załadowane.");
  return { data, count };
}

export async function addOrEditBooking(
  newBooking: NewBookingTypes,
  id?: string,
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
  id: string,
  columnName: string,
): Promise<BookingsDataType[]> {
  const { data: booking, error } = await supabase
    .from("bookings")
    .select("*, trainers(name, category), members(name, phone)")
    .eq(columnName, id)
    .order("date", { ascending: false });
  if (error)
    throw new Error(
      "Wystąpił błąd podczas wyszukiwania rezerwacji. Spróbuj ponownie.",
    );

  return booking;
}

export async function getBookingsAfterDate(selectedTimeRange: string | null): Promise<BookingsAfterDateTypes[]> {
  const { data: booking, error } = await supabase
    .from("bookings")
    .select("id, date, status, trainers(id, name, category), members(name, phone)")
    .lte("date", TODAY_DAY_END )
    .gte("date", START_DAY(selectedTimeRange) )
    .order("date", { ascending: false });
  if (error)
    throw new Error(
      "Wystąpił błąd podczas wyszukiwania rezerwacji. Spróbuj ponownie.",
    );

  return booking;
}

export async function updateBookingStatus(statusValue: string, id: string) {

  const { data, error } = await supabase
    .from("bookings")
    .update({ status: statusValue })
    .eq("id", id)
    .select();

  if (error) throw new Error("Status nie został zaktualizowany.");

  return data;
}
