import GymMembershipTypesContainer from "../features/gymMembership/GymMembershipTypesContainer";
import PaymentsTable from "../features/payments/PaymentsTable";
import { usePayments } from "../features/payments/usePayments";
import MainContainer from "../ui/MainContainer";
import PaymentHeading from "../ui/PaymentHeading";
import AddPaymentModal from "../features/payments/AddPaymentModal";

export default function Payments() {
  const { payments } = usePayments();
  return (
    <MainContainer title="Płatności">
      <div className="grid grid-cols-6 grid-rows-2 gap-20">
        <div className="col-span-4 flex h-[27rem] flex-col gap-3 rounded-2xl bg-slate-900  px-2 pt-4   shadow-2xl shadow-slate-900 ">
          <PaymentHeading>Zakupione karnety</PaymentHeading>
          <PaymentsTable payments={payments}></PaymentsTable>
          <AddPaymentModal />
        </div>
        <GymMembershipTypesContainer />
      </div>
    </MainContainer>
  );
}
