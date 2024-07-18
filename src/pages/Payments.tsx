import { usePayments } from "../features/payments/usePayments";
import GymMembershipTypesContainer from "../features/gymMembership/GymMembershipTypesContainer";
import PurchasedGymMembershipTable from "../features/gymMembership/PurchasedGymMembershipTable";
import { usePurchasedMembership } from "../features/gymMembership/usePurchasedMembership";
import PaymentTable from "../features/payments/PaymentTabe";
import MainContainer from "../ui/MainContainer";
import Heading from "../ui/Heading";

export default function Payments() {
  const { purchasedMemberships, isLoading } = usePurchasedMembership(true);
  const { payments, isLoading: paymentsIsLoading } = usePayments();

  return (
    <MainContainer title="Płatności">
      <div className="grid grid-cols-6 grid-rows-2 gap-10">
        <div className="col-span-6 flex  flex-col gap-3 border-2 border-slate-900 bg-bgTableWithSpacing px-4 py-4 shadow-lg shadow-slate-900 ">
          <Heading>Płatności</Heading>
          <div className="h-60 overflow-auto">
            <PaymentTable payments={payments} paymentsIsLoading={paymentsIsLoading}/>
          </div>
        </div>

        <div className=" col-span-6 flex flex-col gap-3 border-2 border-slate-900  bg-bgTableWithSpacing  px-4  py-4 shadow-lg   shadow-slate-900 xl:col-span-4 ">
          <Heading>Zakupione karnety</Heading>
          <PurchasedGymMembershipTable
            purchasedMemberships={purchasedMemberships}
            isLoading={isLoading}
          ></PurchasedGymMembershipTable>
        </div>
        <GymMembershipTypesContainer />
      </div>
    </MainContainer>
  );
}
