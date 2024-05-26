import GymMembershipTypesContainer from "../features/gymMembership/GymMembershipTypesContainer";
import PurchasedGymMembershipTable from "../features/gymMembership/PurchasedGymMembershipTable";
import { usePurchasedMembership } from "../features/gymMembership/usePurchasedMembership";
import MainContainer from "../ui/MainContainer";
import PaymentHeading from "../ui/PaymentHeading";
import PurchaseGymMembershipModal from "../features/gymMembership/PurchaseGymMembershipModal";

export default function Payments() {
  const { payments } = usePurchasedMembership();
  return (
    <MainContainer title="Płatności">
      <div className="grid grid-cols-6 grid-rows-2 gap-20">
        <div className="col-span-4 flex h-[27rem] flex-col gap-3 rounded-2xl bg-slate-900  px-2 pt-4   shadow-2xl shadow-slate-900 ">
          <PaymentHeading>Zakupione karnety</PaymentHeading>
          <PurchasedGymMembershipTable
            payments={payments}
          ></PurchasedGymMembershipTable>
          <PurchaseGymMembershipModal />
        </div>
        <GymMembershipTypesContainer />
      </div>
    </MainContainer>
  );
}
