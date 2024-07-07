import NoDataContainer from "../../ui/NoDataContainer";
import PaymentModal from "../payments/PaymentModal";
import PaymentTable from "../payments/PaymentTabe";
import MemberDataConainer from "../../ui/MemberDataContainer";

interface PaymentsType {
  id: string;
  created_at: string;
  memberId: string;
  purchasedMembershipId: string;
  amount: number;
  isValid: boolean;
  purchasedMemberships: {
    created_at: string;
    price: number;
    gymMembership: {
      price: number;
      gymMembershipName: string;
      id: string;
    };
  };
  members: {
    name: string;
    phone: string;
  };
}



export default function PaymentTableContainer({ userPayments }: {userPayments : PaymentsType[] | undefined}) {

  return (
    <MemberDataConainer name='Płatności'>
      <div>
        {userPayments?.length !== 0 ? (
          <PaymentTable height='h-48'  payments={userPayments} isMemberPage={true} />
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
