import { useParams } from "react-router-dom";
import { DateTime } from "luxon";

import { ARR_OF_GYM_MEMBERSHIP_ID } from "../../utils/constants";
import { PRICE_TO_PAY } from "../../utils/functions";
import { useBooking } from "../bookings/useBooking";
import { useMembers } from "./useMembers";
import { useUserPurchasedMemberships } from "../gymMembership/useUserPurchasedMemberships";
import { useUserPayments } from "../payments/useUserPayments";
import Container from "../../ui/Container";
import BackButton from "../../ui/BackButton";
import MemberOptions from "./MemberOptions";
import Spinner from "../../ui/Spinner";
import MemberClassesStats from "./MemberClassesStats";
import BookingTableContainer from "./BookingTableContainer";
import PurchasedMembershipContainer from "./PurchasedMembershipsContainer";
import PaymentTableContainer from "./PaymentTableContainer";

function MemberPage() {
  const memberIdParams = useParams();
  const memberId = memberIdParams.memberId as string;
  const { members, isLoading } = useMembers();
  const member = members?.find((member) => String(member.id) === memberId);
  const { booking } = useBooking(member?.id, "memberId");
  const { purchasedMemberships } = useUserPurchasedMemberships(memberId);
  const { userPayments } = useUserPayments(memberId);

  const todayDay = DateTime.now().toString().slice(0, 10);

  const activeMembership = purchasedMemberships?.filter(
    (membership) =>
      todayDay >= membership.startDay &&
      todayDay <= membership.endDay &&
      membership.isValid,
  );

  const activeMembershipPaymentLength = userPayments?.filter(
    (payments) =>
      payments.isValid &&
      payments.purchasedMembershipId === activeMembership?.at(0)?.id,
  ).length;

  const activeMembershipPayments = userPayments
    ?.filter(
      (payments) =>
        payments.isValid &&
        payments.purchasedMembershipId === activeMembership?.at(0)?.id,
    )
    .reduce((acc, payment) => {
      return acc + payment.amount;
    }, 0);

  function calculateDeadline(
    typeOfMembership: number,
    numOfPayments: number,
    dateOfPurchase: string,
  ) {
    const dateOfPurchaseArr = dateOfPurchase.slice(0, 10).split("-");
    const convertedDateOfPurchase = DateTime.fromObject({
      year: +dateOfPurchaseArr[0],
      month: +dateOfPurchaseArr[1],
      day: +dateOfPurchaseArr[2],
    });

    const numOfMonths =
      typeOfMembership === ARR_OF_GYM_MEMBERSHIP_ID[2] ? 6 : 12;
    let deadline = dateOfPurchase;
    if (numOfPayments >= 1 && numOfPayments <= numOfMonths)
      deadline = convertedDateOfPurchase
        .plus({ month: numOfPayments })
        .toString();

    return deadline;
  }

  function paymentDeadline(
    typeOfMembership: number,
    numOfPayments: number,
    dateOfPurchase: string,
  ) {
    let paymentDeadline = dateOfPurchase;
    if (typeOfMembership === ARR_OF_GYM_MEMBERSHIP_ID[0]) paymentDeadline;
    if (typeOfMembership === ARR_OF_GYM_MEMBERSHIP_ID[1]) paymentDeadline;
    if (
      typeOfMembership ===
      (ARR_OF_GYM_MEMBERSHIP_ID[2] || ARR_OF_GYM_MEMBERSHIP_ID[3])
    )
      paymentDeadline = calculateDeadline(
        typeOfMembership,
        numOfPayments,
        dateOfPurchase,
      );

    return paymentDeadline;
  }

  const fullMembershipPrice = PRICE_TO_PAY(
    activeMembership?.at(0)?.gymMembership.price as number,
    activeMembership?.at(0)?.gymMembershipId as string,
  );
  const paymentDate = paymentDeadline(
    activeMembership?.at(0)?.gymMembershipId,
    activeMembershipPaymentLength,
    activeMembership?.at(0)?.startDay,
  )?.slice(0, 10);

  if (member === undefined) return;
  if (isLoading) return <Spinner />;
  return (
    <Container>
      <h2 className="font-bold uppercase">{member.name}</h2>
      <div className="flex justify-around">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <h3 className="font-semibold text-lightAccentColor">E-mail:</h3>
            <p>{member.email.toLowerCase()}</p>
          </div>
          <div className="flex gap-2">
            <h3 className="font-semibold text-lightAccentColor">Telefon:</h3>
            <p>{member.phone}</p>
          </div>
          <div className="flex gap-2">
            <h3 className="font-semibold text-lightAccentColor">Płeć:</h3>
            <p>{member.gender}</p>
          </div>
          <div className="flex gap-2">
            <h3 className="font-semibold text-lightAccentColor">Miasto:</h3>
            <p>{member.city}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <h3 className="font-semibold text-accentColor2">
                Aktywny karnet:
              </h3>
              {activeMembership?.length === 0 ? (
                <p className="font-semibold uppercase tracking-wider">brak</p>
              ) : (
                <p className="text-md self-end font-semibold uppercase tracking-wider">
                  {activeMembership?.at(0)?.gymMembership.gymMembershipName}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              {activeMembership?.length !== 0 && (
                <p className="font-semibold uppercase tracking-wider">
                  {activeMembership?.at(0)?.startDay} -{" "}
                  {activeMembership?.at(0)?.endDay}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <h3 className="font-semibold text-lightAccentColor">
              Płtaność za karnet:
            </h3>
            {activeMembership?.length !== 0 ? (
              <p
                className={`${activeMembershipPayments === fullMembershipPrice && "text-lime-500"} font-semibold`}
              >
                <span>{activeMembershipPayments}</span> /{" "}
                <span>{fullMembershipPrice}</span>
              </p>
            ) : (
              <p>Brak aktywnego karnetu.</p>
            )}
          </div>
          <div className="flex gap-2">
            <h3 className="font-semibold text-lightAccentColor">
              Data kolejnej płatności:
            </h3>
            <p className={paymentDate <= todayDay ? "text-red-500" : ""}>
              {activeMembershipPayments !== fullMembershipPrice &&
              activeMembership?.length !== 0
                ? paymentDate
                : "-"}
            </p>
          </div>
        </div>
        {booking && <MemberClassesStats memberBookings={booking} />}
        <BackButton />
      </div>
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
