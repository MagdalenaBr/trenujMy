import GymMembershipTypesContainer from "../features/gymMembership/GymMembershipTypesContainer";
import PurchasedGymMembershipTable from "../features/gymMembership/PurchasedGymMembershipTable";
import { usePurchasedMembership } from "../features/gymMembership/usePurchasedMembership";
import MainContainer from "../ui/MainContainer";
import PaymentHeading from "../ui/PaymentHeading";
import PurchaseGymMembershipModal from "../features/gymMembership/PurchaseGymMembershipModal";
import PaymentTable from "../features/payments/PaymentTabe";
import { usePayments } from "../features/payments/usePayments";

export default function Payments() {
  const { purchasedMemberships } = usePurchasedMembership();
  const { payments } = usePayments();
  return (
    <MainContainer title="Płatności">
      <div className="grid grid-cols-6 grid-rows-2 gap-20">
        <div className="col-span-6 flex h-[18.4rem] flex-col gap-3 rounded-lg border-2 border-slate-900 bg-slate-900 px-4 pt-4 shadow-2xl shadow-slate-900 ">
          <PaymentHeading>Płatności</PaymentHeading>
          <div className="h-60 overflow-auto">
            <PaymentTable payments={payments}/>
          </div>
        </div>
        
        <div className="col-span-4 flex flex-col gap-3 rounded-2xl bg-slate-900  px-2 pt-4   shadow-2xl shadow-slate-900 ">
          <PaymentHeading>Zakupione karnety</PaymentHeading>
          <PurchasedGymMembershipTable
            purchasedMemberships={purchasedMemberships}
          ></PurchasedGymMembershipTable>
          <PurchaseGymMembershipModal />
        </div>
        <GymMembershipTypesContainer />
      </div>
    </MainContainer>
  );
}
