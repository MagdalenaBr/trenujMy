import StatusButton from "../../ui/StatusButton";
import TableWithSpacing from "../../ui/TableWithSpacing";
import BookingStatus from "../../ui/BookingStatus";
import { useTodayBookings } from "./useTodayBookings";
import Heading from "../../ui/Heading";
import { useUpdateBookingStatus } from "./useUpdateBookingStatus";
import HomePageContainer from "../../ui/HomePageContainer";

export default function TodaysBookings() {
  const { todayBookings } = useTodayBookings();

  const { updateStatus } = useUpdateBookingStatus();

  function handleClick(statusValue: string, id: string) {
    console.log(statusValue, id);
    updateStatus({ statusValue, id });
  }
  return (
    <HomePageContainer colGrid='col-span-3'>
      <Heading>Rezerwacje</Heading>
      <TableWithSpacing>
        {todayBookings?.map((booking) => (
          <TableWithSpacing.Row key={booking.id} noBorder={true}>
            <div>
              <h2 className="text-start font-semibold">
                {booking.members?.name}
              </h2>
              <p className="text-start text-sm text-secondaryTextColor">
                {booking.members?.phone}
              </p>
            </div>
            <p className="text-start">{booking.trainers.name}</p>
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

        {todayBookings?.length === 0 && <p>Brak dostępnych rezerwacji.</p>}
      </TableWithSpacing>
    </HomePageContainer>
  );
}
