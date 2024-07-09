import { useForm } from "react-hook-form";
import { useEditOpenHours } from "./useEditOpenHours.ts";
import { useOpenHours } from "./useOpenHours.ts";
import FormRow from "../../ui/FormRow";
import FormInput from "../../ui/FormInput.tsx";
import Form from "../../ui/Form.tsx";
import ButtonsContainer from "../../ui/ButtonsContainer.tsx";

interface PropsType {
  handleCloseModal?: () => void;
}

interface OpenHoursTypes {
  openHour: string;
  closeHour: string;
}

function OpenHoursForm({ handleCloseModal }: PropsType) {
  const { openHours } = useOpenHours();
  const { changeOpenHours } = useEditOpenHours();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      openHour: "08:00",
      closeHour: "20:00",
    },
  });
  const { errors } = formState;

  if (!openHours) return null;
  const id = openHours[0].id;

  const onSubmit = (data: OpenHoursTypes) => {
    changeOpenHours({ newHours: data, id });
    handleCloseModal?.();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow name="openHour" label="Godzina otwarcia:">
        <FormInput
          errors={errors}
          inputName="openHour"
          register={register}
          formType="time"
        />
      </FormRow>
      <FormRow name="closeHour" label="Godzina zamknięcia:">
        <FormInput
          errors={errors}
          inputName="closeHour"
          register={register}
          formType="time"
        />
      </FormRow>
      <ButtonsContainer
        isEditingSession={true}
        handleClick={() => handleCloseModal?.()}
      />
    </Form>
  );
}

export default OpenHoursForm;
