import { useBookingsAfterDate } from "./useBookingsAfterDate";
import TableWithSpacing from "../../ui/TableWithSpacing";
import BookingStatus from "../../ui/BookingStatus";
import Heading from "../../ui/Heading";
import HomePageContainer from "../../ui/HomePageContainer";
import StatusChange from "../bookings/StatusChange";
import { DateTime } from "luxon";

export default function HomePageBookingsContainer() {
  const { bookingsAfterDate } = useBookingsAfterDate();

  return (
    <div className="overflow-x-scroll xl:overflow-x-hidden col-span-4">

    <HomePageContainer colGrid="col-span-4" width="w-[50rem]">
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
              <p>
                {DateTime.fromISO(booking.date.split("T")[0]).toLocaleString()}
              </p>
              <p className="text-sm text-secondaryTextColor">
                {booking.date.split("T")[1]}
              </p>
            </div>
            <BookingStatus status={booking.status} />
            <div className="flex justify-end gap-4">
              <StatusChange currentPage="home" booking={booking} />
            </div>
          </TableWithSpacing.Row>
        ))}

        {bookingsAfterDate?.length === 0 && <p>Brak dostępnych rezerwacji.</p>}
      </TableWithSpacing>
    </HomePageContainer>
    </div>
  );
}
