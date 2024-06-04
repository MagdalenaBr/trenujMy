import TableWithSpacing from "../../ui/TableWithSpacing";
import PaymentHeading from "../../ui/PaymentHeading";
import { useGymMembership } from "./useGymMembership";

import EditMembershipModal from "./EditMembershipModal";

export default function GymMembershipTypesContainer() {
  const { gymMembership } = useGymMembership();
  return (
    <div className="col-span-2  flex h-[18.4rem] flex-col gap-3 rounded-lg border-2 border-slate-900 bg-slate-900 pt-4 px-4 shadow-2xl shadow-slate-900 ">
      <PaymentHeading>Dostępne karnety</PaymentHeading>
      <div className="h-60 overflow-auto">
        <TableWithSpacing columns="grid-cols-2">
          {gymMembership?.map((membership) => (
            <TableWithSpacing.Row key={membership.id}>
              <p>{membership.gymMembershipName}</p>
              <p>{membership.price}</p>
            </TableWithSpacing.Row>
          ))}
          <div className="text-start">

          <EditMembershipModal />
          </div>
        </TableWithSpacing>
      </div>
    </div>
  );
}
