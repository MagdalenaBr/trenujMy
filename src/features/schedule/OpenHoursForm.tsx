import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import StyledButton from "../../ui/StyledButton";
import FormInput from "../../ui/FormInput.tsx";
import { useEditOpenHours } from "./useEditOpenHours.ts";
import { useOpenHours } from "./useOpenHours.ts";
import Form from "../../ui/Form.tsx";

interface PropsType {
  handleCloseModal?: () => void;
}

interface OpenHoursTypes {
  openHour: string;
  closeHour: string;
}

function OpenHoursForm({ handleCloseModal }: PropsType) {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      openHour: "08:00",
      closeHour: "20:00",
    },
  });
  const { openHours } = useOpenHours();

  const { changeOpenHours } = useEditOpenHours();

  const { errors } = formState;
  if (!openHours) return;
  const id = openHours[0].id;

  const onSubmit = (data: OpenHoursTypes) => {
    changeOpenHours({ newHours: data, id });
    handleCloseModal?.();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow name="openHour" label="Godzina otwarcia">
        <FormInput
          errors={errors}
          inputName="openHour"
          register={register}
          formType="time"
        />
      </FormRow>
      <FormRow name="closeHour" label="Godzina zamknięcia">
        <FormInput
          errors={errors}
          inputName="closeHour"
          register={register}
          formType="time"
        />
      </FormRow>
      <div className="flex justify-end gap-4 pt-4">
        <StyledButton
          styleType="close"
          type="reset"
          handleClick={() => handleCloseModal?.()}
        >
          Anuluj
        </StyledButton>
        <StyledButton styleType="add">Zmień</StyledButton>
      </div>
    </Form>
  );
}

export default OpenHoursForm;
