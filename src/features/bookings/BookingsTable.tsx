import { HiOutlinePencil } from "react-icons/hi2";
import { useBookings } from "./useBookings";
import AddBookingModal from "./AddBookingModal";
import BookingStatus from "./BookingStatus";
import Table from "../../ui/Table";
import TableNoContent from "../../ui/TableNoContent";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";

function BookingsTable() {
  const { bookings, isLoading, error } = useBookings();
  if (isLoading) return <Spinner />;
  if (error) return <TableNoContent />;

  return (
    <Table uniqueStyles="px-2 py-2 ">
      <Table.Header>
        <p>Klient</p>
        <p>Trener</p>
        <p>Data</p>
        <p>Status</p>
      </Table.Header>
      {bookings ? (
        bookings.map((booking) => (
          <Table.Row key={booking.id}>
            <div>
              <h2 className="font-semibold">{booking.members?.name}</h2>
              <p className="text-secondaryTextColor text-start text-sm">{booking.members?.phone}</p>
            </div>
            <p>{booking.trainers.name}</p>
            <div>
              <p>{booking.date.split("T")[0]}</p>
              <p className="text-start text-sm text-secondaryTextColor">
                {booking.date.split("T")[1]}
              </p>
            </div>
            <div className="flex w-full justify-between">
              <BookingStatus status={booking?.status} />
              <AddBookingModal
                booking={booking}
                memberId={booking.memberId}
                memberName={booking.members?.name}
              >
                <Button>
                  <HiOutlinePencil className="text-2xl" />
                </Button>
              </AddBookingModal>
            </div>
          </Table.Row>
        ))
      ) : (
        <TableNoContent />
      )}
    </Table>
  );
}

export default BookingsTable;
