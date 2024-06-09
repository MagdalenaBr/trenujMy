import TableWithSpacing from "../../ui/TableWithSpacing";
import { PRICE_TO_PAY } from "../../utils/helpers";
import { useCancelPayment } from "./useCancelPayment";
import StatusButton from "../../ui/StatusButton";

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
}: {
  payments: PaymentsType[] | undefined;
  isMemberPage?: boolean;
}) {
  // function priceToPay(amount: number, membershipTypeId: string) {
  //   let price;
  //   if (String(membershipTypeId) === "1") price = amount;
  //   if (String(membershipTypeId) === "2") price = amount;
  //   if (String(membershipTypeId) === "3") price = amount * 6;
  //   if (String(membershipTypeId) === "4") price = amount * 12;

  //   return price;
  // }
  const { cancelPayment } = useCancelPayment();
  function handleClick(id: string, value: boolean) {
    cancelPayment({ id, value });
  }

  return (
    <TableWithSpacing columns="grid-cols-6">
      <div>
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
                  {payment.purchasedMemberships.created_at.split("T").at(0)}
                </p>
                <p className=" text-center text-sm text-secondaryTextColor">
                  {payment.purchasedMemberships.created_at
                    ?.split("T")[0]
                    .slice(0, 8)}
                </p>
              </span>
            </div>
            <p>{payment.amount}</p>

            <div className="flex">
              <span className="w-full text-center">
                <p>{payment.created_at.split("T").at(0)}</p>
                <p className=" text-center text-sm text-secondaryTextColor">
                  {payment.created_at.split("T")[1].slice(0, 8)}
                </p>
              </span>
            </div>

            {isMemberPage &&
              (payment.isValid ? (
                <StatusButton
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
          </TableWithSpacing.Row>
        ))}
      </div>
    </TableWithSpacing>
  );
}
