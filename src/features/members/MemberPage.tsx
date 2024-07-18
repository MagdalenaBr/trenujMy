import { useParams } from "react-router-dom";
import { useBooking } from "../bookings/useBooking";
import { useMembers } from "./useMembers";
import { useUserPurchasedMemberships } from "../gymMembership/useUserPurchasedMemberships";
import { useUserPayments } from "../payments/useUserPayments";
import MemberOptions from "./MemberOptions";
import BookingTableContainer from "./BookingTableContainer";
import PurchasedMembershipContainer from "./PurchasedMembershipsContainer";
import PaymentTableContainer from "./PaymentTableContainer";
import Container from "../../ui/Container";
import MemberData from "./MemberData";
import Spinner from "../../ui/Spinner";

function MemberPage() {
  const memberIdParams = useParams();
  const memberId = memberIdParams.memberId as string;
  const { members, isLoading: memberIsLoading } = useMembers();
  const member = members?.find((member) => String(member.id) === memberId);
  const { booking } = useBooking(memberId, "memberId");
  const { purchasedMemberships } = useUserPurchasedMemberships(memberId);
  const { userPayments } = useUserPayments(memberId);

  if (memberIsLoading) return <Spinner />;

  return (
    <Container>
      <MemberData
        purchasedMemberships={purchasedMemberships}
        userPayments={userPayments}
        member={member}
        booking={booking}
      />
      <BookingTableContainer member={member} booking={booking} />
      <PurchasedMembershipContainer
        purchasedMemberships={purchasedMemberships}
        member={member}
      />
      <PaymentTableContainer userPayments={userPayments} />
      <MemberOptions member={member} />
    </Container>
  );
}

export default MemberPage;
