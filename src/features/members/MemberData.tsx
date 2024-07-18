import { DateTime } from "luxon";
import { ARR_OF_GYM_MEMBERSHIP_ID, TODAY_DAY } from "../../utils/constants";
import { PRICE_TO_PAY } from "../../utils/helpers";
import MemberClassesStats from "./MemberClassesStats";
import BackButton from "../../ui/BackButton";
import GridContainer from "../../ui/GridContainer";
import { PurchasedMemberschipTypes } from "../../types/purchaseMembershipTypes";
import { PaymentsType } from "../../types/paymentsTypes";
import { MembersType } from "../../types/membersTypes";
import { BookingsDataType } from "../../types/bookingTypes";
import MemeberEmail from "./MemberEmail";
import HeadingSm from "../../ui/HeadingSm";

export default function MemberData({
  purchasedMemberships,
  userPayments,
  member,
  booking,
}: {
  purchasedMemberships: PurchasedMemberschipTypes[] | undefined;
  userPayments: PaymentsType[] | undefined;
  member: MembersType;
  booking: BookingsDataType[] | undefined;
}) {
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
    typeOfMembership: string,
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
      String(typeOfMembership) === ARR_OF_GYM_MEMBERSHIP_ID[2] ? 6 : 12;
    let deadline = dateOfPurchase;
    if (numOfPayments >= 1 && numOfPayments <= numOfMonths)
      deadline = convertedDateOfPurchase
        .plus({ month: numOfPayments })
        .toString();

    return deadline;
  }

  function paymentDeadline(
    typeOfMembership: string,
    numOfPayments: number,
    dateOfPurchase: string,
  ) {
    let paymentDeadline = dateOfPurchase;
    if (String(typeOfMembership) === ARR_OF_GYM_MEMBERSHIP_ID[0])
      paymentDeadline;
    if (String(typeOfMembership) === ARR_OF_GYM_MEMBERSHIP_ID[1])
      paymentDeadline;
    if (
      String(typeOfMembership) ===
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
    activeMembership?.at(0)?.gymMembershipId as string,
    activeMembershipPaymentLength as number,
    activeMembership?.at(0)?.startDay as string,
  )?.slice(0, 10);

  return (
    <>
      <h2 className="font-bold uppercase md:text-2xl">{member.name}</h2>
      <div className="flex flex-col justify-around lg:flex-row">
        <div className="flex flex-col flex-wrap gap-4">
          <MemeberEmail member={member} />
          <GridContainer>
            <HeadingSm>Telefon:</HeadingSm>
            <p>{member.phone}</p>
          </GridContainer>
          <GridContainer>
            <HeadingSm>Płeć:</HeadingSm>
            <p>{member.gender}</p>
          </GridContainer>
          <GridContainer>
            <HeadingSm>Miasto:</HeadingSm>
            <p>{member.city}</p>
          </GridContainer>
          <div className="flex flex-col gap-2">
            <GridContainer>
              <HeadingSm textColor="text-iconsColor">Aktywny karnet:</HeadingSm>
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
            <HeadingSm>Płtaność za karnet:</HeadingSm>
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
            <HeadingSm>Data kolejnej płatności:</HeadingSm>
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
    </>
  );
}
