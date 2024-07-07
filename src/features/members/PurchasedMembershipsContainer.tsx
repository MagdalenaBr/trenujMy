import NoDataContainer from "../../ui/NoDataContainer";
import PurchaseGymMembershipModal from "../gymMembership/PurchaseGymMembershipModal";
import PurchasedGymMembershipTable from "../gymMembership/PurchasedGymMembershipTable";
import MemberDataConainer from "../../ui/MemberDataContainer";


interface MembersType {
	created_at: string;
	id: string;
  city: string;
	email: string;
	gender: string;
	name: string;
	phone: string;
}

interface PaymentsType {
  created_at: string;
  endDay: string;
  startDay: string;
  price: number;
  isValid: boolean;
  gymMembership: {
    price: number;
    gymMembershipName: string;
  };
  gymMembershipId: string;
  id: string;
  memberId: string;
  members: {
    name: string;
    phone: string;
    startDay: string;
  };
}
export default function PurchasedMembershipContainer({
  purchasedMemberships,
  member,
}:{purchasedMemberships: PaymentsType[] | undefined, member: MembersType}) {


  return (
    <MemberDataConainer name='Zakupione karnety'>
      <div>
        {purchasedMemberships?.length !== 0 ? (
          <PurchasedGymMembershipTable
            purchasedMemberships={purchasedMemberships}
            height="h-48"
            isMemberPage={true}
          />
        ) : (
          <div className="h-48">
            <NoDataContainer />
          </div>
        )}

        <PurchaseGymMembershipModal
          activeMemberData={member}
          isMemberPage={true}
        />
      </div>
    </MemberDataConainer>
  );
}
