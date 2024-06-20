import StatusButton from "../../ui/StatusButton";
import { TODAY_DAY } from "../../utils/constants";
import { useUpdateBookingStatus } from "../homePage/useUpdateBookingStatus";
import AddBookingModal from "./AddBookingModal";
import Button from "../../ui/Button";
import { HiOutlinePencil } from "react-icons/hi2";

interface BookingTypes {
  created_at: string;
  trainerId: string;
  memberId: string;
  date: string;
  id: string;
  members: {
    name: string;
    phone: string;
  };
  status: string;
  trainers: {
    name: string;
    category: string;
  };
}

export default function StatusChange({ booking, currentPage }: { booking: BookingTypes, currentPage?: string }) {
  const { updateStatus } = useUpdateBookingStatus();

  const todayDay = TODAY_DAY.toString().slice(0, 10);

  function handleClick(statusValue: string, id: string) {
    updateStatus({ statusValue, id });
  }
  return (
    <>
      {booking.date >= todayDay && currentPage !== 'home' ? (
        <AddBookingModal
          booking={booking}
          memberId={booking.memberId}
          memberName={booking.members?.name}
        >
          <Button>
            <HiOutlinePencil className="text-2xl text-accentColor2" />
          </Button>
        </AddBookingModal>
      ) : (
        <>
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
        </>
      )}{" "}
    </>
  );
}
