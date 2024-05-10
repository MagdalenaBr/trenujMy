// import FormRow from "../../ui/FormRow";

// export default function MembershipStartDate({
//   register,
//   onChange,
//   gymMembershipData,
//   errors,
// }) {
//   <FormRow name="gymMembershipId" label="Rodzaj karnetu">
//     <select
//       id={"gymMembershipId"}
//       {...register("gymMembershipId")}
//       className="col-start-1 col-end-4 h-9 w-80 rounded-md border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800 disabled:border-none disabled:bg-slate-300 disabled:font-bold disabled:outline-none"
//       onChange={(e) => {
//         if (!onChange) return;
//         onChange(e);
//       }}
//     >
//       <option value=""></option>
//       {gymMembershipData?.map((membership) => (
//         <option
//           key={membership.gymMembershipName}
//           value={membership.id}
//           label={membership.gymMembershipName}
//           defaultValue={membership.id}
//         />
//       ))}
//     </select>
//     {errors && errors.gymMembershipId?.message && (
//       <p className="col-start-4 col-end-7">
//         {errors.gymMembershipId?.message?.toString()}
//       </p>
//     )}
//   </FormRow>;
// }
