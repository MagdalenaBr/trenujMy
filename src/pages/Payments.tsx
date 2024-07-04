import GymMembershipTypesContainer from "../features/gymMembership/GymMembershipTypesContainer";
import PurchasedGymMembershipTable from "../features/gymMembership/PurchasedGymMembershipTable";
import { usePurchasedMembership } from "../features/gymMembership/usePurchasedMembership";
import MainContainer from "../ui/MainContainer";
import Heading from "../ui/Heading";
import PaymentTable from "../features/payments/PaymentTabe";
import { usePayments } from "../features/payments/usePayments";

export default function Payments() {
  const { purchasedMemberships } = usePurchasedMembership(true);
  const { payments } = usePayments();

  console.log(purchasedMemberships);
  return (
    <MainContainer title="Płatności">
      <div className="grid grid-cols-6 grid-rows-2 gap-10">
        <div className="col-span-6 flex  flex-col gap-3 border-2 border-slate-900 bg-slate-900 px-4 py-4 shadow-2xl shadow-slate-900 ">
          <Heading>Płatności</Heading>
          <div className="h-60 overflow-auto">
            <PaymentTable payments={payments} />
          </div>
        </div>

        <div className=" col-span-6 xl:col-span-4 flex flex-col gap-3  bg-slate-900  px-4 py-4   shadow-2xl shadow-slate-900 ">
          <Heading>Zakupione karnety</Heading>
          <PurchasedGymMembershipTable
            purchasedMemberships={purchasedMemberships}
          ></PurchasedGymMembershipTable>
        </div>
        <GymMembershipTypesContainer />
      </div>
    </MainContainer>
  );
}
