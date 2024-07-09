import { DateTime } from "luxon";
import { BookingsDataType } from "../../types/bookingTypes";
import StatusChange from "../bookings/StatusChange";
import TableWithSpacing from "../../ui/TableWithSpacing";
import BookingStatus from "../../ui/BookingStatus";

function MemberClasses({
  memberBookings,
}: {
  memberBookings: BookingsDataType[];
}) {
  return (
    <div className="h-48 overflow-auto">
      <TableWithSpacing
        columns="grid-cols-[repeat(4,minmax(100px,_1fr))]"
        uniqueStyles="w-[40rem] md:w-full"
      >
        {memberBookings?.map((booking) => (
          <TableWithSpacing.Row key={booking.id}>
            <p className="text-start">{booking.trainers.name}</p>
            <div>
              <p>
                {DateTime.fromISO(booking.date.split("T")[0]).toLocaleString()}
              </p>
              <p className="text-sm text-slate-600">
                {booking.date.split("T")[1]}
              </p>
            </div>
            <BookingStatus status={booking?.status} />
            <div className=" flex justify-end gap-3 px-2">
              <StatusChange booking={booking} />
            </div>
          </TableWithSpacing.Row>
        ))}
      </TableWithSpacing>
    </div>
  );
}
export default MemberClasses;
