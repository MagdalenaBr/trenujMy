import { HiOutlinePencil, HiPlus } from "react-icons/hi2";
import TableWithSpacing from "../../ui/TableWithSpacing";

export default function GymMembershipTypesContainer() {
  return (
    <div className="col-span-2  flex h-[22rem] flex-col gap-3 rounded-lg border-2 border-slate-900 bg-slate-900 p-4 shadow-2xl shadow-slate-900 ">
      <h2 className="text-lg font-semibold uppercase tracking-wider ">
        Karnety
      </h2>
      <div className="h-60 overflow-auto">
        <TableWithSpacing columns="grid-cols-3">
          <TableWithSpacing.Row>
            <p>1 dzień</p>
            <p>35 zł</p>
            <HiOutlinePencil className="text-2xl" />
          </TableWithSpacing.Row>
          <TableWithSpacing.Row>
            <p>1 miesiąc</p>
            <p>120 zł</p>
            <HiOutlinePencil className="text-2xl" />
          </TableWithSpacing.Row>
          <TableWithSpacing.Row>
            <p>6 miesięcy</p>
            <p>110 zł</p>
            <HiOutlinePencil className="text-2xl" />
          </TableWithSpacing.Row>
          <TableWithSpacing.Row>
            <p>12 miesięcy</p>
            <p>90 zł</p>
            <HiOutlinePencil className="text-2xl" />
          </TableWithSpacing.Row>
        </TableWithSpacing>
      </div>

      <HiPlus className="self-center text-3xl text-accentColor2 " />
    </div>
  );
}
