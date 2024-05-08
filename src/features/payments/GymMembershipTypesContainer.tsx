import { HiOutlinePencil, HiPlus } from "react-icons/hi2";
import TableWithSpacing from "../../ui/TableWithSpacing";

export default function GymMembershipTypesContainer() {
  return (
      <div className="flex  flex-col col-span-2 gap-3 rounded-lg bg-slate-900 border-2 border-slate-900 p-4 h-[22rem] shadow-2xl shadow-slate-900 ">
        <h2 className="text-lg font-semibold uppercase tracking-wider ">
          Karnety
        </h2>
        <div className="overflow-auto h-60">
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
        <div className="self-center rounded-lg border-2 border-accentColor2 text-3xl text-accentColor2 ">
          <HiPlus />
        </div>
      </div>
  );
}
