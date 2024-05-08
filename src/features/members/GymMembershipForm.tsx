import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useEditMember } from "./useEditMember";
import FormInput from "../../ui/FormInput";
import { useTrainers } from "../trainer/useTrainers";
import Form from "../../ui/Form";
import ButtonsContainer from "../../ui/ButtonsContainer";

interface CommonData {
  city: string;
  email: string;
  endGymMembership: string;
  gender: string;
  gymMembershipType: string;
  name: string;
  phone: string;
  startGymMembership: string;
}
interface MemberTypes extends CommonData {
  id: string;
}

interface PropsType {
  handleCloseModal?: () => void;
  member: MemberTypes;
}

function GymMembershipForm({ member, handleCloseModal }: PropsType) {
  const { id } = member;
  const { trainers } = useTrainers();

  const { register, handleSubmit } = useForm({
    defaultValues: member,
  });
  const { editMember } = useEditMember();
  const onSubmit = (data: CommonData) => {
    editMember({ newMember: data, id });
    handleCloseModal?.();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow name="startGymMembership" label="Data rozpoczęcia">
        <FormInput
          inputName="startGymMembership"
          register={register}
          formType="date"
        />
      </FormRow>

      <FormRow name="endGymMembership" label="Data zakończenia">
        <FormInput
          inputName="endGymMembership"
          register={register}
          formType="date"
        />
      </FormRow>

      <FormRow name="gymMembershipType" label="Rodzaj karnetu">
        <select
          id="gymMembershipType"
          {...register("gymMembershipType")}
          className="col-start-1 col-end-4 h-9 w-80 rounded-md border-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-slate-800"
        >
          <option value="Karnet otwarty">Karnet otwarty</option>
          {trainers?.map((trainer) => (
            <option
              key={trainer.id}
              value={`${trainer.category} ${trainer.name}`}
            >
              {trainer.category} {trainer.name} {trainer.price}zł
            </option>
          ))}
        </select>
      </FormRow>

      <ButtonsContainer isEditingSession={true} handleClick={() => handleCloseModal?.()}/>
    </Form>
  );
}

export default GymMembershipForm;
