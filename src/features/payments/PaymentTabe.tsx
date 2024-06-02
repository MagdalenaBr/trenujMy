import { cancelPayment } from "../../services/apiPayments";
import TableWithSpacing from "../../ui/TableWithSpacing";
import { useCancelPayment } from "./useCancelPayment";

export default function PaymentTable({ payments, isMemberPage }) {
  function priceToPay(amount: number, membershipTypeId: number) {
    let price;
    if (membershipTypeId === 1) price = amount;
    if (membershipTypeId === 2) price = amount;
    if (membershipTypeId === 3) price = amount * 6;
    if (membershipTypeId === 4) price = amount * 12;

    return price;
  }
  const { cancelPayment } = useCancelPayment();
  function handleClick(id: string, value: boolean) {
    console.log(id, value);
    cancelPayment({ id, value });
  }

  // isLoading &&<Spinner/>
  return (
    // <div className="col-span-6 flex h-[18.4rem] flex-col gap-3 rounded-lg border-2 border-slate-900 bg-slate-900 px-4 pt-4 shadow-2xl shadow-slate-900 ">
    //   <PaymentHeading>Płatności</PaymentHeading>
    //   <div className="h-60 overflow-auto">
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
          <TableWithSpacing.Row>
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
              {priceToPay(
                payment.purchasedMemberships.gymMembership.price,
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
                    .split("T")
                    .at(1)
                    .slice(0, 8)}
                </p>
              </span>
            </div>
            <p>{payment.amount}</p>

            <div className="flex">
              <span className="w-full text-center">
                <p>{payment.created_at.split("T").at(0)}</p>
                <p className=" text-center text-sm text-secondaryTextColor">
                  {payment.created_at.split("T").at(1).slice(0, 8)}
                </p>
              </span>
            </div>

            {isMemberPage &&
              (payment.isValid ? (
                <button
                  className="rounded-lg border border-red-300 text-[11px] font-semibold uppercase"
                  onClick={() => handleClick(payment.id, false)}
                >
                  Anuluj
                </button>
              ) : (
                <p className="text-[11px] font-semibold uppercase tracking-wider text-red-600">
                  Anulowano
                </p>
              ))}
          </TableWithSpacing.Row>
        ))}
      </div>
    </TableWithSpacing>
    //   </div>
    //   <div className="text-start">
    //     {/* <PaymentModal/> */}
    //   </div>
    // </div>
  );
}
