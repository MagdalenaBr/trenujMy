import { DateTime } from "luxon";
import StatusButton from "../../ui/StatusButton";
import TableWithSpacing from "../../ui/TableWithSpacing";
import { useCancelPurchase } from "./useCancelPurchase";

interface PaymentsType {
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

export default function PurchasedGymMembershipTable({
  purchasedMemberships,
  height = "h-60",
  isMemberPage,
}: {
  purchasedMemberships: PaymentsType[] | undefined;
  height?: string;
  isMemberPage?: boolean;
}) {
  const { cancelPurchase } = useCancelPurchase();
  function handleClick(id: string, value: boolean) {
    cancelPurchase({ id, value });
  }

  return (
    <TableWithSpacing
      uniqueStyles="px-2"
      columns={
        isMemberPage
          ? "grid-cols-[2fr_2fr_3fr_2fr_100px]"
          : "grid-cols-[1fr_1fr_2fr_1fr]"
      }
    >
      <div className={`${height} overflow-auto`}>
        {purchasedMemberships?.map((membership) => (
          <TableWithSpacing.Row key={membership.id}>
            <div>
              <h2
                className={`text-start font-semibold ${!membership.isValid && "line-through"}`}
              >
                {membership.members.name}
              </h2>
              <p className="text-start text-sm text-secondaryTextColor">
                {membership.members.phone}
              </p>
            </div>
            <p className="text-center">
              {membership.gymMembership.gymMembershipName}
            </p>
            <div className="flex">
              <span className="w-full text-center">
                <p>{DateTime.fromISO(membership.startDay.split("T").at(0) as string).toLocaleString()}</p>
              </span>
              <span> - </span>
              <span className="w-full text-center">
                <p>{DateTime.fromISO(membership.endDay.split("T").at(0) as string).toLocaleString()}</p>
              </span>
            </div>
            <p
              className={`text-center ${!membership.isValid && "line-through"}`}
            >
              {membership.price} zł
            </p>

            {isMemberPage &&
              (membership.isValid ? (
                <StatusButton status='cancel' onClick={() => handleClick(membership.id, false)}>Anuluj</StatusButton>
              ) : (
                <p className="text-[11px] font-semibold uppercase tracking-wider text-red-600">
                  Anulowano
                </p>
              ))}
          </TableWithSpacing.Row>
        ))}
      </div>
    </TableWithSpacing>
  );
}
