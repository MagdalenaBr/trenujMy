import { useContext } from "react";
import FormRow from "../../ui/FormRow";
import { PurchasedMembershipContext } from "./AddPaymentForm";

export default function GymMembershipMember() {
  const context = useContext(PurchasedMembershipContext);
  return (
    <FormRow name="member" label="Klient">
      <input
        list="member"
        {...context?.register("memberId")}
        className="col-start-1 col-end-4 h-9 w-80 rounded-md border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800"
      />
      <datalist id="member">
        {context?.members?.map((member) => (
          <option key={member.phone} value={`${member.name} ${member.phone}`} />
        ))}
      </datalist>

      {context?.errors && context?.errors.memberId?.message && (
        <p className="col-start-4 col-end-7">
          {context.errors.memberId.message?.toString()}
        </p>
      )}
    </FormRow>
  );
}
