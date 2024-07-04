import NoDataContainer from "../../ui/NoDataContainer";
import PaymentModal from "../payments/PaymentModal";
import PaymentTable from "../payments/PaymentTabe";
import MemberDataConainer from "../../ui/MemberDataContainer";

export default function PaymentTableContainer({ userPayments }) {
  return (
    <MemberDataConainer name='Płatności'>
      <div>
        {userPayments?.length !== 0 ? (
          <PaymentTable  payments={userPayments} isMemberPage={true} />
        ) : (
          <div className="h-48">
            <NoDataContainer />
          </div>
        )}
        <PaymentModal />
      </div>
    </MemberDataConainer>
  );
}
