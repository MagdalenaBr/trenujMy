import MemberClasses from "./MemberClasses";
import SelectBookingTypeModal from "../bookings/SelectBookingTypeModal";
import Button from "../../ui/Button";
import { HiPlus } from "react-icons/hi2";
import NoDataContainer from "../../ui/NoDataContainer";
import MemberDataConainer from "../../ui/MemberDataContainer";

export default function BookingTableContainer({ booking, member }) {
  return (
    <MemberDataConainer name='Zajęcia'>
      <div>
        {booking?.length !== 0 ? (
          booking && <MemberClasses memberBookings={booking} />
        ) : (
          <div className="h-48">
            <NoDataContainer />
          </div>
        )}
        {/* memberId={member.id} memberName={member.name} */}
        <SelectBookingTypeModal memberId={member.id}>
          <Button styles="mx-2 my-1">
            <div className="flex items-center gap-2">
              <HiPlus className=" md:text-3xl text-accentColor2 " />
              <span className="text-sm md:text-lg uppercase tracking-wide text-accentColor2">
                Zarezerwuj zajęcia
              </span>
            </div>
          </Button>
        </SelectBookingTypeModal>
      </div>
    </MemberDataConainer>
  );
}
