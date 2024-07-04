import TableWithSpacing from "../../ui/TableWithSpacing";
import { PRICE_TO_PAY } from "../../utils/helpers";
import { useCancelPayment } from "./useCancelPayment";
import StatusButton from "../../ui/StatusButton";
import { DateTime } from "luxon";

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

export default function PaymentTable({
  payments,
  isMemberPage,
  height
}: {
  payments: PaymentsType[] | undefined;
  isMemberPage?: boolean;
  height?: string
}) {
  const { cancelPayment } = useCancelPayment();
  function handleClick(id: string, value: boolean) {
    cancelPayment({ id, value });
  }

  return (
    <div className={`overflow-y-auto ${height}`}>

    <TableWithSpacing
      columns="lg:grid-cols-[2fr_1fr_2fr_1fr_1fr_1fr]"
      smColumns="grid-cols-[130px_100px_100px_100px_100px_150px]"
      uniqueStyles="w-[43rem] lg:w-full px-2"
    >
      <div className="overflow-auto">
        <TableWithSpacing.Header>
          {!isMemberPage && <p>Imie i nazwisko</p>}
          <p>Karnet</p>
          <p>Cena karnetu</p>
          <p>Data zakupu</p>
          <p>Wpłata</p>
          <p>Data wpłaty</p>
        </TableWithSpacing.Header>
        {payments?.map((payment) => (
          <TableWithSpacing.Row key={payment.id}>
            {!isMemberPage && (
              <div>
                <h2 className={`text-start font-semibold`}>
                  {payment.members.name}
                </h2>
                <p className="text-start text-sm text-secondaryTextColor">
                  {payment.members.phone}
                </p>
              </div>
            )}
            <p>
              {payment.purchasedMemberships.gymMembership.gymMembershipName}
            </p>
            <p>
              {PRICE_TO_PAY(
                payment.purchasedMemberships.price,
                payment.purchasedMemberships.gymMembership.id,
              )}
            </p>

            <div className="flex">
              <span className="w-full text-center">
                <p>
                  {DateTime.fromISO(
                    payment.purchasedMemberships.created_at
                      .split("T")
                      .at(0) as string,
                  ).toLocaleString()}
                </p>
                <p className=" text-center text-sm text-secondaryTextColor">
                  {payment.purchasedMemberships.created_at
                    ?.split("T")[1]
                    .slice(0, 8)}
                </p>
              </span>
            </div>
            <p>{payment.amount}</p>

            <div className="flex">
              <span className="w-full text-center">
                <p>
                  {DateTime.fromISO(
                    payment.created_at.split("T").at(0) as string,
                  ).toLocaleString()}
                </p>
                <p className=" text-center text-sm text-secondaryTextColor">
                  {payment.created_at.split("T")[1].slice(0, 8)}
                </p>
              </span>
            </div>
            <div>
              {isMemberPage &&
                (payment.isValid ? (
                  <StatusButton
                  paddingX="px-5"
                    status="cancel"
                    onClick={() => handleClick(payment.id, false)}
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
    </div>
  );
}
