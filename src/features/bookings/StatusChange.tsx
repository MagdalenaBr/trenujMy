import { HiOutlinePencil } from "react-icons/hi2";
import { useUpdateBookingStatus } from "../homePage/useUpdateBookingStatus";
import { TODAY_DAY } from "../../utils/constants";
import { BookingsDataType } from "../../types/bookingTypes";
import AddBookingModal from "./AddBookingModal";
import StatusButton from "../../ui/StatusButton";
import Button from "../../ui/Button";

export default function StatusChange({
  booking,
  currentPage,
}: {
  booking: BookingsDataType;
  currentPage?: string;
}) {
  const { updateStatus } = useUpdateBookingStatus();

  const todayDay = TODAY_DAY.toString().slice(0, 10);

  function handleClick(statusValue: string, id: string) {
    updateStatus({ statusValue, id });
  }

  return (
    <>
      {booking.date >= todayDay && currentPage !== "home" ? (
        <AddBookingModal
          booking={booking}
          memberId={booking.memberId}
          typeOfActivities={
            booking.trainers.category === "trener personalny"
              ? "personalTrainer"
              : "groupActivities"
          }
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
