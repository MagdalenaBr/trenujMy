import { HiOutlinePencil } from "react-icons/hi2";
import TableWithSpacing from "../../ui/TableWithSpacing";

export default function PaymentsTable({
  payments,
  height = "h-[19rem]",
  isMemberPage,
}: {
  payments:
    | {
        endDay: string;
        startDay: string;
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
      }[]
    | undefined;
  height: string;
  isMemberPage: boolean;
}) {
  return (
    <TableWithSpacing
      uniqueStyles="px-2"
      columns={
        isMemberPage
          ? "grid-cols-[2fr_2fr_3fr_2fr_1fr]"
          : "grid-cols-[1fr_1fr_2fr_1fr]"
      }
    >
      <div className={`${height} overflow-auto`}>
        {payments?.map((payment) => (
          <TableWithSpacing.Row key={payment.id}>
            <div>
              <h2 className="text-start font-semibold">
                {payment.members.name}
              </h2>
              <p className="text-start text-sm text-secondaryTextColor">
                {payment.members.phone}
              </p>
            </div>
            <p className="text-center">
              {payment.gymMembership.gymMembershipName}
            </p>
            <div className="flex">
              <span className="w-full text-center">
                <p>{payment.startDay.split("T").at(0)}</p>
                <p className=" text-center text-sm text-secondaryTextColor">
                  {payment.startDay.split("T").at(1)}
                </p>
              </span>
              <span> - </span>
              <span className="w-full text-center">
                <p>{payment.endDay.split("T").at(0)}</p>
                <p className="text-center text-sm text-secondaryTextColor">
                  {payment.endDay.split("T").at(1)}
                </p>
              </span>
            </div>
            <p className="text-center">{payment.gymMembership.price} zł</p>

            {isMemberPage && <HiOutlinePencil className="text-2xl" />}
          </TableWithSpacing.Row>
        ))}
      </div>
    </TableWithSpacing>
  );
}
