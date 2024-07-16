import { HiPlus } from "react-icons/hi2";
import { MembersType } from "../../types/membersTypes";
import SelectBookingTypeModal from "../bookings/SelectBookingTypeModal";
import MemberClasses from "./MemberClasses";
import Button from "../../ui/Button";
import NoDataContainer from "../../ui/NoDataContainer";
import MemberDataConainer from "../../ui/MemberDataContainer";
import { BookingsDataType } from "../../types/bookingTypes";

export default function BookingTableContainer({
  booking,
  member,
}: {
  booking: BookingsDataType[] | undefined;
  member: MembersType;
}) {
  return (
    <MemberDataConainer name="Zajęcia">
      <div>
        {booking?.length !== 0 ? (
          booking && <MemberClasses memberBookings={booking} />
        ) : (
          <div className="h-48">
            <NoDataContainer />
          </div>
        )}
        <SelectBookingTypeModal memberId={member.id}>
          <Button styles="mx-2 my-1">
            <div className="flex items-center gap-2  text-iconsColor">
              <HiPlus className=" md:text-2xl " />
              <span className="text-sm uppercase tracking-wide md:text-lg">
                Zarezerwuj zajęcia
              </span>
            </div>
          </Button>
        </SelectBookingTypeModal>
      </div>
    </MemberDataConainer>
  );
}
