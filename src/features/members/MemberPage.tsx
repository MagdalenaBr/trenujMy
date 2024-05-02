import { useParams } from "react-router-dom";
import Container from "../../ui/Container";
import BackButton from "../../ui/BackButton";
import MemberOptions from "./MemberOptions";
import EditGymMembershipModal from "./EditGymMembershipModal";
import { useMembers } from "./useMembers";
import Spinner from "../../ui/Spinner";
import StyledButton from "../../ui/StyledButton";
import AddBookingModal from "../bookings/AddBookingModal";
import MemberClasses from "./MemberClasses";
import MemberClassesStats from "./MemberClassesStats";
import { useBooking } from "../bookings/useBooking";

function MemberPage() {
  const memberIdParams = useParams();
  const memberId = Number(memberIdParams.memberId);
  const { members, isLoading } = useMembers();
  const member = members?.find((member) => member.id === memberId);
  const { booking } = useBooking(member?.id, "memberId");

  if (isLoading) return <Spinner />;
  if (member === undefined) return;

  return (
    <Container>
      <h2 className="font-bold uppercase">{member.name}</h2>
      <div className="flex justify-around">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <h3 className="text-lightAccentColor font-semibold">E-mail:</h3>
            <p>{member.email.toLowerCase()}</p>
          </div>
          <div className="flex gap-2">
            <h3 className="text-lightAccentColor font-semibold">Telefon:</h3>
            <p>{member.phone}</p>
          </div>
          <div className="flex gap-2">
            <h3 className="text-lightAccentColor font-semibold">Płeć:</h3>
            <p>{member.gender}</p>
          </div>
          <div className="flex gap-2">
            <h3 className="text-lightAccentColor font-semibold">Miasto:</h3>
            <p>{member.city}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <h3 className="font-semibold text-accentColor2">
                Wykupiony karnet:
              </h3>
              <span className="uppercase">{member.gymMembershipType}</span>
            </div>
            <div>
              {member.startGymMembership === null ? (
                <>
                  <span>brak</span>
                  <EditGymMembershipModal member={member} />
                </>
              ) : (
                <>
                  <span className="font-semibold">
                    {member.startGymMembership}
                  </span>{" "}
                  do{" "}
                  <span className="font-semibold">
                    {member.endGymMembership}
                  </span>
                  <EditGymMembershipModal member={member} />
                </>
              )}
            </div>
          </div>
        </div>
        {booking && <MemberClassesStats memberBookings={booking} />}
        <BackButton />
      </div>

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
            <p>Brak dostępnych rezerwacji</p>
          </div>
        )}

        <AddBookingModal  memberId={member.id} memberName={member.name}>
          <StyledButton styleType="add">Zarezerwuj zajęcia</StyledButton>
        </AddBookingModal>
      </div>

      <MemberOptions member={member} />
    </Container>
  );
}

export default MemberPage;
