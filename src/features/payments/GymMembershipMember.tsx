import FormRow from "../../ui/FormRow"

export default function GymMembershipMember() {
return  <FormRow name="member" label="Klient">
<input
  list="member"
  {...register("memberId")}
  className="col-start-1 col-end-4 h-9 w-80 rounded-md border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800"
/>
<datalist id="member">
  {members?.map((member) => (
    <option
      key={member.phone}
      value={`${member.name} ${member.phone}`}
    />
  ))}
</datalist>

{errors && errors.memberId?.message && (
  <p className="col-start-4 col-end-7">
    {errors.memberId.message?.toString()}
  </p>
)}
</FormRow>
}