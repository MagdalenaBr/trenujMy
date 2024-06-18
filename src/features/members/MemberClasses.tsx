import TableWithSpacing from "../../ui/TableWithSpacing";
import BookingStatus from "../../ui/BookingStatus";
import StatusChange from "../bookings/StatusChange";

interface BookingTypes {
  created_at: string;
  date: string;
  id: string;
  memberId: string;
  members: {
    name: string;
    phone: string;
  };
  status: string;
  trainerId: string;
  trainers: {
    name: string;
    category: string;
  };
}

function MemberClasses({ memberBookings }: { memberBookings: BookingTypes[] }) {
  return (
    <div className="h-48 overflow-auto">
      <TableWithSpacing columns="grid-cols-[repeat(4,minmax(100px,_1fr))]">
        {memberBookings?.map((booking) => (
          <TableWithSpacing.Row key={booking.id}>
            <p>{booking.trainers.name}</p>
            <div>
              <p>{booking.date.split("T")[0]}</p>
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
