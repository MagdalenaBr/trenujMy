import { MembersType } from "../../types/membersTypes";
import { PurchasedMemberschipTypes } from "../../types/purchaseMembershipTypes";
import PurchaseGymMembershipModal from "../gymMembership/PurchaseGymMembershipModal";
import PurchasedGymMembershipTable from "../gymMembership/PurchasedGymMembershipTable";
import NoDataContainer from "../../ui/NoDataContainer";
import MemberDataConainer from "../../ui/MemberDataContainer";

export default function PurchasedMembershipContainer({
  purchasedMemberships,
  member,
}: {
  purchasedMemberships: PurchasedMemberschipTypes[] | undefined;
  member: MembersType;
}) {
  return (
    <MemberDataConainer name="Zakupione karnety">
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
