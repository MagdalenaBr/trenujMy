import { useParams } from "react-router-dom";
import { DateTime } from "luxon";

import { ARR_OF_GYM_MEMBERSHIP_ID, DEVICE_WIDTH, TODAY_DAY } from "../../utils/constants";
import { PRICE_TO_PAY } from "../../utils/helpers";
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
import GridContainer from "../../ui/GridContainer";

function MemberPage() {
  const memberIdParams = useParams();
  const memberId = memberIdParams.memberId as string;
  const { members, isLoading } = useMembers();
  const member = members?.find((member) => String(member.id) === memberId);
  const { booking } = useBooking(member?.id, "memberId");
  const { purchasedMemberships } = useUserPurchasedMemberships(memberId);
  const { userPayments } = useUserPayments(memberId);

  const todayDay = TODAY_DAY.toString().slice(0, 10);

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

  if (member === undefined) return null;
  if (isLoading) return <Spinner />;

  const memberEmailLength = member.email.split("").length;
  const dividedMemberEmail = member.email.match(/.{1,17}/g);

  return (
    <Container>
      <h2 className="font-bold uppercase">{member.name}</h2>
      <div className="flex flex-col justify-around lg:flex-row">
        <div className="flex flex-col flex-wrap gap-4">
          <GridContainer>
            <h3 className="font-semibold text-lightAccentColor">E-mail:</h3>
            {memberEmailLength > 17 && DEVICE_WIDTH < 768 ? (
              <p className="flex flex-col">
                {dividedMemberEmail.map((el: string) => (
                  <span>{el.toLowerCase()}</span>
                ))}
              </p>
            ) : (
              <p>{member.email.toLowerCase()}</p>
            )}
          </GridContainer>
          <GridContainer>
            <h3 className="font-semibold text-lightAccentColor">Telefon:</h3>
            <p>{member.phone}</p>
          </GridContainer>
          <GridContainer>
            <h3 className="font-semibold text-lightAccentColor">Płeć:</h3>
            <p>{member.gender}</p>
          </GridContainer>
          <GridContainer>
            <h3 className="font-semibold text-lightAccentColor">Miasto:</h3>
            <p>{member.city}</p>
          </GridContainer>
          <div className="flex flex-col gap-2">
            <GridContainer>
              <h3 className="font-semibold text-accentColor2">
                Aktywny karnet:
              </h3>
              {activeMembership?.length === 0 ? (
                <p className="uppercase tracking-wider">brak</p>
              ) : (
                <p className="text-md self-end uppercase tracking-wider">
                  {activeMembership?.at(0)?.gymMembership.gymMembershipName}
                </p>
              )}
            </GridContainer>
            <GridContainer>
              {activeMembership?.length !== 0 && (
                <p className="text-sm">
                  (
                  {DateTime.fromISO(
                    activeMembership
                      ?.at(0)
                      ?.startDay.split("T")
                      .at(0) as string,
                  ).toLocaleString()}{" "}
                  -{" "}
                  {DateTime.fromISO(
                    activeMembership?.at(0)?.endDay as string,
                  ).toLocaleString()}
                  )
                </p>
              )}
            </GridContainer>
          </div>
          <GridContainer>
            <h3 className="font-semibold text-lightAccentColor">
              Płtaność za karnet:
            </h3>
            {activeMembership?.length !== 0 ? (
              <p
                className={`${activeMembershipPayments === fullMembershipPrice && "text-lime-500"}`}
              >
                <span>{activeMembershipPayments}</span> /{" "}
                <span>{fullMembershipPrice}</span>
              </p>
            ) : (
              <p>Brak aktywnego karnetu.</p>
            )}
          </GridContainer>
          <GridContainer>
            <h3 className="font-semibold text-lightAccentColor">
              Data kolejnej płatności:
            </h3>
            <p className={paymentDate <= todayDay ? "text-red-500" : ""}>
              {activeMembershipPayments !== fullMembershipPrice &&
              activeMembership?.length !== 0
                ? DateTime.fromISO(paymentDate).toLocaleString()
                : "-"}
            </p>
          </GridContainer>
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
