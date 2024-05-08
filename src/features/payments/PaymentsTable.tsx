import { HiPlus } from "react-icons/hi2";
import Table from "../../ui/Table";
import { usePayments } from "./usePayments";

export default function PaymentsTable() {
  const { payments } = usePayments();

  return (
    <div className="col-span-4 flex h-[22rem] flex-col gap-3 rounded-2xl bg-slate-900   shadow-2xl shadow-slate-900 ">
      <Table uniqueStyles="px-2 py-2" columns="grid-cols-[1fr_1fr_2fr_1fr]">
        <Table.Header>
          <p>Klient</p>
          <p className="text-center">Karnet</p>
          <p className="text-center">Okres</p>
          <p className="text-center">kwota</p>
        </Table.Header>
        <div className="h-60 overflow-auto bg-slate-800">
          {payments?.map((payment) => (
            <Table.Row>
              <div>
                <h2 className="font-semibold">{payment.members.name}</h2>
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
                <span className="w-full text-center">
                  <p>{payment.endDay.split("T").at(0)}</p>
                  <p className="text-center text-sm text-secondaryTextColor">
                    {payment.endDay.split("T").at(1)}
                  </p>
                </span>
              </div>
              <p className="text-center">{payment.gymMembership.price}</p>
            </Table.Row>
          ))}
        </div>
      </Table>

      <HiPlus className=" self-center  text-3xl text-accentColor2 " />
    </div>
  );
}
