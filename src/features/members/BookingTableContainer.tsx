import MemberClasses from "./MemberClasses";
import AddBookingModal from "../bookings/AddBookingModal";
import Button from "../../ui/Button";
import { HiPlus } from "react-icons/hi2";

export default function BookingTableContainer({booking, member}) {
  return (
    <div>
    <div className="flex items-center justify-center py-5">
      <hr className="mx-3 w-[20rem]" />
      <h3 className="font-semibold uppercase">Zajęcia</h3>
      <hr className="mx-3 w-[20rem]" />
    </div>
    {booking?.length !== 0 ? (
      booking && <MemberClasses memberBookings={booking} />
    ) : (
      <div className="h-48 text-sm text-slate-300">
        <p>Brak dostępnych rezerwacji.</p>
      </div>
    )}

    <AddBookingModal memberId={member.id} memberName={member.name}>
      <Button styles="mx-2 my-1">
        <div className="flex items-center gap-2">
          <HiPlus className="text-3xl text-accentColor2 " />
          <span className="text-lg uppercase tracking-wide text-accentColor2">
            Zarezerwuj zajęcia
          </span>
        </div>
      </Button>
    </AddBookingModal>
  </div>

  );
}
