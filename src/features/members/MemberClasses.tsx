import { HiOutlinePencil } from "react-icons/hi2";
import Button from "../../ui/Button";
import TableWithSpacing from "../../ui/TableWithSpacing";
import BookingStatus from "../bookings/BookingStatus";
import AddBookingModal from "../bookings/AddBookingModal";

interface BookingTypes {
  created_at: string;
  date: string;
  id: number;
  memberId: number;
  members: {
    name: string;
    phone: string;
  };
  status: string;
  trainerId: number;
  trainers: {
    name: string;
    category: string;
  };
}

function MemberClasses({ memberBookings }: { memberBookings: BookingTypes[] }) {
  return (
    <div className="h-48 overflow-auto">
      <TableWithSpacing columns="grid-cols-[repeat(3,minmax(100px,_1fr))_100px]">
        {memberBookings?.map((el) => (
          <TableWithSpacing.Row key={el.id}>
            <p>{el.trainers.name}</p>
            <div>
              <p>{el.date.split("T")[0]}</p>
              <p className="text-sm text-slate-600">{el.date.split("T")[1]}</p>
            </div>
            <BookingStatus status={el?.status} />
            <AddBookingModal
              booking={el}
              memberId={el.memberId}
              memberName={el.members?.name}
            >
              <Button>
                <HiOutlinePencil className="text-2xl text-accentColor2" />
              </Button>
            </AddBookingModal>
          </TableWithSpacing.Row>
        ))}
      </TableWithSpacing>
    </div>
  );
}
export default MemberClasses;
