import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useMembers } from "../members/useMembers";
import ButtonsContainer from "../../ui/ButtonsContainer";

export default function PaymentForm(handleCloseModal) {

    const {members}=useMembers()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    handleCloseModal?.();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow name="member" label="Klient">
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

        {errors &&errors.memberId?.message && (
          <p className="col-start-4 col-end-7">
            {errors.memberId.message?.toString()}
          </p>
        )}
      </FormRow>

      {/* <FormRow name="gymMembershipId" label="Rodzaj karnetu">
        <FormOption
          errors={errors}
          inputName="gymMembershipId"
          register={register}
          value="gymMembership"
          gymMembershipData={gymMembership}
          onChange={handleMembershipChange}
        />
      </FormRow>
      <FormRow name="price" label="Cena">
        <FormInput
          register={register}
          formType="number"
          inputName="price"
        ></FormInput>
      </FormRow> */}
      

      <ButtonsContainer handleClick={() => handleCloseModal?.()} />
    </Form>
  );
}
