import { DateTime } from "luxon";
import { useCancelPurchase } from "./useCancelPurchase";
import { PurchasedMemberschipTypes } from "../../types/purchaseMembershipTypes";
import StatusButton from "../../ui/StatusButton";
import TableWithSpacing from "../../ui/TableWithSpacing";
import TableNoContent from "../../ui/TableNoContent";
import Spinner from "../../ui/Spinner";

export default function PurchasedGymMembershipTable({
  purchasedMemberships,
  height = "h-60",
  isMemberPage,
  isLoading,
}: {
  purchasedMemberships: PurchasedMemberschipTypes[] | undefined;
  height?: string;
  isMemberPage?: boolean;
  isLoading?: boolean;
}) {
  const { cancelPurchase } = useCancelPurchase();

  function handleClick(id: string, value: boolean) {
    cancelPurchase({ id, value });
  }

  if (isLoading) return <Spinner />;
  if (!purchasedMemberships?.length)
    return <TableNoContent>Brak dosępnych danych.</TableNoContent>;
  return (
    <TableWithSpacing
      smColumns="grid-cols-[130px_120px_200px_100px_100px]"
      columns={
        isMemberPage
          ? "xl:grid-cols-[2fr_2fr_3fr_2fr_100px]"
          : "xl:grid-cols-[1fr_1fr_2fr_1fr]"
      }
      uniqueStyles="w-[43rem] md:w-[45] xl:w-full px-2"
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
                <p>
                  {DateTime.fromISO(
                    membership.startDay.split("T").at(0) as string,
                  ).toLocaleString()}
                </p>
              </span>
              <span> - </span>
              <span className="w-full text-center">
                <p>
                  {DateTime.fromISO(
                    membership.endDay.split("T").at(0) as string,
                  ).toLocaleString()}
                </p>
              </span>
            </div>
            <p
              className={`text-center ${!membership.isValid && "line-through"}`}
            >
              {membership.price} zł
            </p>

            <div>
              {isMemberPage &&
                (membership.isValid ? (
                  <StatusButton
                    paddingX="px-5"
                    status="cancel"
                    onClick={() => handleClick(membership.id, false)}
                  >
                    Anuluj
                  </StatusButton>
                ) : (
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-red-600">
                    Anulowano
                  </p>
                ))}
            </div>
          </TableWithSpacing.Row>
        ))}
      </div>
    </TableWithSpacing>
  );
}
