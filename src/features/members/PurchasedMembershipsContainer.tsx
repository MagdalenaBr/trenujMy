import PurchaseGymMembershipModal from "../gymMembership/PurchaseGymMembershipModal";
import PurchasedGymMembershipTable from "../gymMembership/PurchasedGymMembershipTable";

export default function PurchasedMembershipContainer({purchasedMemberships, member}) {
  return (
    <div>
      <div className="flex items-center justify-center py-5">
        <hr className="mx-3 w-[17rem]" />
        <h3 className="font-semibold uppercase">Zakupione karnety</h3>
        <hr className="mx-3 w-[17rem]" />
      </div>
      {purchasedMemberships?.length !== 0 ? (
        <PurchasedGymMembershipTable
          purchasedMemberships={purchasedMemberships}
          height="h-48"
          isMemberPage={true}
        />
      ) : (
        <div className="h-48 text-sm text-slate-300">
          <p>Brak dostępnych karnetów.</p>
        </div>
      )}

      <PurchaseGymMembershipModal
        activeMemberData={member}
        isMemberPage={true}
      />
    </div>
  );
}
