import { useParams } from "react-router-dom";
import Container from "../../ui/Container";
import BackButton from "../../ui/BackButton";
import MemberOptions from "./MemberOptions";
import EditGymMembershipModal from "./EditGymMembershipModal";
import { useMembers } from "./useMembers";
import Spinner from "../../ui/Spinner";
import AddBookingModal from "../bookings/AddBookingModal";
import MemberClasses from "./MemberClasses";
import MemberClassesStats from "./MemberClassesStats";
import { useBooking } from "../bookings/useBooking";
import PurchasedGymMembershipTable from "../gymMembership/PurchasedGymMembershipTable";
import { useUserPurchasedMemberships } from "../gymMembership/useUserPurchasedMemberships";
import Button from "../../ui/Button";
import { HiPlus } from "react-icons/hi2";
import PurchaseGymMembershipModal from "../gymMembership/PurchaseGymMembershipModal";
import PaymentTable from "../payments/PaymentTabe";
import { useUserPayments } from "../payments/useUserPayments";
import PaymentModal from "../payments/PaymentModal";
import { DateTime } from "luxon";
import { useUserAactivePurchasedMemberships } from "../gymMembership/useUserActivePurchasedMemberships";
import ActiveMembershipInfo from "../gymMembership/ActiveMembershipInfo";

function MemberPage() {
  // const todayDay = DateTime.now().toString();
  // console.log(todayDay);
  const memberIdParams = useParams();
  const memberId = memberIdParams.memberId as string;
  const { members, isLoading } = useMembers();
  const member = members?.find((member) => String(member.id) === memberId);
  const { booking } = useBooking(member?.id, "memberId");

  const { purchasedMemberships } = useUserPurchasedMemberships(memberId);

  const { userPayments } = useUserPayments(memberId);

  if (isLoading) return <Spinner />;
  if (member === undefined) return;

  const todayDay = DateTime.now().toString().slice(0, 10);

  const activeMembership = purchasedMemberships?.filter(
    (membership) =>
      todayDay >= membership.startDay && todayDay <= membership.endDay,
  );

  const activeMembershipPayments = userPayments?.filter(payments => payments.isValid && payments.purchasedMembershipId === activeMembership?.at(0)?.id).reduce((acc, payment)=> { return acc + payment.amount}, 0)


function paymentDeadline(todayDay, typeOfMembership)  {

}



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
            <div>
              {activeMembership?.length !== 0 && (
                <p className="font-semibold uppercase tracking-wider">
                  {activeMembership?.at(0)?.startDay} -{" "}
                  {activeMembership?.at(0)?.endDay}
                </p>
              )}
            </div>

            {/* <div>
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
            </div> */}
          </div>
          <div className="flex gap-2">
            <h3 className="font-semibold text-lightAccentColor">
              Płtaność za karnet:
            </h3>
            <p className={`${activeMembershipPayments === activeMembership?.at(0)?.price && 'text-lime-500'} font-semibold`}>
              <span>{activeMembershipPayments}</span> / <span>{activeMembership?.at(0)?.price}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <h3 className="font-semibold text-lightAccentColor">
              Data kolejnej płatności:
            </h3>
            <p>
              {/* <span>0 zł</span> / <span>129 zł</span> */}
            </p>
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

      <div>
        <div className="flex items-center justify-center py-5">
          <hr className="mx-3 w-[17rem]" />
          <h3 className="font-semibold uppercase">Zakupione karnety</h3>
          <hr className="mx-3 w-[17rem]" />
        </div>
        {purchasedMemberships?.length !== 0 ? (
          <PurchasedGymMembershipTable
            purchasedMemberships={purchasedMemberships}
            height="h-48"
            isMemberPage={true}
          />
        ) : (
          <div className="h-48 text-sm text-slate-300">
            <p>Brak dostępnych karnetów.</p>
          </div>
        )}

        <PurchaseGymMembershipModal
          activeMemberData={member}
          isMemberPage={true}
        />
      </div>

      <div>
        <div className="flex items-center justify-center py-5">
          <hr className="mx-3 w-[17rem]" />
          <h3 className="font-semibold uppercase">Płatności</h3>
          <hr className="mx-3 w-[17rem]" />
        </div>
        {userPayments?.length !== 0 ? (
          <PaymentTable payments={userPayments} isMemberPage={true} />
        ) : (
          <div className="h-48 text-sm text-slate-300">
            <p>Brak dostępnych karnetów.</p>
          </div>
        )}
        <PaymentModal />
      </div>

      <MemberOptions member={member} />
    </Container>
  );
}

export default MemberPage;
