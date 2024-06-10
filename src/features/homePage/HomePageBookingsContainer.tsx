import { useBookingsAfterDate } from "./useBookingsAfterDate";
import { useUpdateBookingStatus } from "./useUpdateBookingStatus";
import StatusButton from "../../ui/StatusButton";
import TableWithSpacing from "../../ui/TableWithSpacing";
import BookingStatus from "../../ui/BookingStatus";
import Heading from "../../ui/Heading";
import HomePageContainer from "../../ui/HomePageContainer";

export default function HomePageBookingsContainer() {
  const { bookingsAfterDate } = useBookingsAfterDate();
  const { updateStatus } = useUpdateBookingStatus();

  function handleClick(statusValue: string, id: string) {
    updateStatus({ statusValue, id });
  }
  return (
    <HomePageContainer colGrid="col-span-3">
      <Heading>Rezerwacje</Heading>
      <TableWithSpacing columns="grid-cols-5">
        {bookingsAfterDate?.map((booking) => (
          <TableWithSpacing.Row key={booking.id} noBorder={true}>
            <div className="px-2 text-start">
              <h2 className="font-semibold">{booking.members?.name}</h2>
              <p className="text-sm text-secondaryTextColor">
                {booking.members?.phone}
              </p>
            </div>
            <p className="px-2 text-start">{booking.trainers.name}</p>
            <div className="text-start">
              <p>{booking.date.split("T")[0]}</p>
              <p className="text-sm text-secondaryTextColor">
                {booking.date.split("T")[1]}
              </p>
            </div>
            <BookingStatus status={booking.status} />
            <div className="flex justify-end gap-4">
              <StatusButton
                width="w-20"
                status="confirm"
                disabled={booking.status === "zrealizowana"}
                onClick={() => handleClick("zrealizowana", booking.id)}
              >
                zrealizuj
              </StatusButton>
              <StatusButton
                width="w-20"
                status="cancel"
                disabled={booking.status === "anulowana"}
                onClick={() => handleClick("anulowana", booking.id)}
              >
                anuluj
              </StatusButton>
            </div>
          </TableWithSpacing.Row>
        ))}

        {bookingsAfterDate?.length === 0 && <p>Brak dostępnych rezerwacji.</p>}
      </TableWithSpacing>
    </HomePageContainer>
  );
}
