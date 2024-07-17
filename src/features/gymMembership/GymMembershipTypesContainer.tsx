import { useGymMembership } from "./useGymMembership";
import EditMembershipModal from "./EditMembershipModal";
import TableWithSpacing from "../../ui/TableWithSpacing";
import Heading from "../../ui/Heading";
import TableNoContent from "../../ui/TableNoContent";

export default function GymMembershipTypesContainer() {
  const { gymMembership } = useGymMembership();

  if (!gymMembership?.length)
    return <TableNoContent>Brak dostępnych danych.</TableNoContent>;

  return (
    <div className=" col-span-6 flex h-[18.4rem]  flex-col gap-3 border-2 border-slate-900  bg-bgTableWithSpacing px-4 pt-4 shadow-lg shadow-slate-900 md:col-span-3 xl:col-span-2 ">
      <Heading>Dostępne karnety</Heading>
      <div className="h-60 overflow-auto">
        <TableWithSpacing columns="grid-cols-2">
          {gymMembership?.map((membership) => (
            <TableWithSpacing.Row key={membership.id}>
              <p className="font-semibold">{membership.gymMembershipName}</p>
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
