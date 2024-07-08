import { HiOutlinePencil } from "react-icons/hi2";
import { useBookings } from "./useBookings";
import AddBookingModal from "./AddBookingModal";
import BookingStatus from "../../ui/BookingStatus";
import Table from "../../ui/Table";
import TableNoContent from "../../ui/TableNoContent";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useContext } from "react";
import { SearchNameContext } from "../../context/SearchContext";
import { TODAY_DAY } from "../../utils/constants";
import { DateTime } from "luxon";

function BookingsTable() {
  const todayDay = TODAY_DAY.toString().slice(0, 10);
  const searchNameContext = useContext(SearchNameContext);
  const { bookings, isLoading, error, count } = useBookings();


  if (isLoading) return <Spinner />;
  if (error) return <TableNoContent />;

  const filteredBookings = bookings?.filter((bookings) =>
    bookings.members.name
      .toLowerCase()
      .includes(searchNameContext?.name.toLocaleLowerCase() as string)
      ? bookings
      : "",
  );

  return (
    <Table uniqueStyles="px-2 py-2 w-[40rem]  lg:w-auto" columns="lg:grid-cols-4" smColumns="grid-cols-[150px_160px_100px_200px]">
      <Table.Header>
        <p>Klient</p>
        <p>Trener</p>
        <p>Data</p>
        <p>Status</p>
      </Table.Header>
      {filteredBookings ? (
        filteredBookings.map((booking) => (
          <Table.Row key={booking.id}>
            <div>
              <h2 className="font-semibold">{booking.members?.name}</h2>
              <p className="text-start text-[13px] text-secondaryTextColor">
                {booking.members?.phone}
              </p>
            </div>
            <p>{booking.trainers.name}</p>
            <div>
              <p>{DateTime.fromISO(booking.date.split("T")[0]).toLocaleString()}</p>
              <p className="text-start text-[12px] text-secondaryTextColor">
                {booking.date.split("T")[1]}
              </p>
            </div>

            <div className="flex w-full justify-between">
              <BookingStatus status={booking?.status} />
              {todayDay < booking.date ? (
                <AddBookingModal
                  booking={booking}
                  memberId={booking.memberId}
                  typeOfActivities={booking.trainers.category === 'trener personalny' ? 'personalTrainer' : 'groupActivities'}
                >
                  <Button >
                    <HiOutlinePencil className="text-2xl" />
                  </Button>
                </AddBookingModal>
              ) : (
                ""
              )}
            </div>
          </Table.Row>
        ))
      ) : (
        <TableNoContent />
      )}
      <Table.Footer numOfData={count as number | null} />
    </Table>
  );
}

export default BookingsTable;
