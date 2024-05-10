import GymMembershipTypesContainer from "../features/gymMembership/GymMembershipTypesContainer";
import PaymentsTable from "../features/payments/PaymentsTable";
import MainContainer from "../ui/MainContainer";

export default function Payments() {
  return (
    <MainContainer title="Płatności">
      <div className="grid grid-cols-6 grid-rows-2 gap-20">
        <PaymentsTable />
        <GymMembershipTypesContainer />
      </div>
    </MainContainer>
  );
}
