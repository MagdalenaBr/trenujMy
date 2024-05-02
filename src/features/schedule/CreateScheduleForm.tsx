import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import StyledButton from "../../ui/StyledButton";
import FormInput from "../../ui/FormInput.tsx";
import { useTrainers } from "../trainer/useTrainers.tsx";
import FormOption from "../../ui/FormOption.tsx";
import { useCreateSchedules } from "./useCreateSchedules.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/ScheduleValidation.tsx";
import { useEditSchedules } from "./useEditSchedules.tsx";
import Spinner from "../../ui/Spinner.tsx";
import Form from "../../ui/Form.tsx";

interface PropsType {
  handleCloseModal?: () => void;
  classes?: ClassesType;
}

interface DataTypes {
  date: string;
  numOfPlaces: number;
  name: string;
  trainerId: string;
}

interface ClassesType extends DataTypes {
  id: string;
  created_at: string;
  trainers: {
    name: string;
    category: string;
  };
}
function CreateScheduleForm({
  classes = {} as ClassesType,
  handleCloseModal,
}: PropsType) {
  const { id, ...classesData } = classes;
  const isEditingSession = Boolean(id);

  const { createClasses } = useCreateSchedules();
  const { editClasses } = useEditSchedules();
  const { trainers, trainerIsLoading } = useTrainers();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: isEditingSession ? classesData : {},
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = (data: DataTypes) => {
    const { date, name, numOfPlaces, trainerId } = data;
    const newData = {
      date,
      name,
      numOfPlaces,
      trainerId,
    };
    if (isEditingSession) {
      editClasses({ newClasses: newData, id });
    } else {
      if (!isEditingSession) createClasses(data);
    }
    handleCloseModal?.();
  };

  if (trainerIsLoading) return <Spinner />;
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow name="name" label="Rodzaj zajęć">
        <FormOption
          trainerData={trainers}
          value="typeOfActivities"
          errors={errors}
          inputName="name"
          register={register}
        />
      </FormRow>
      <FormRow name="trainerId" label="Trener">
        <FormOption
          trainerData={trainers}
          errors={errors}
          value="trainers"
          inputName="trainerId"
          register={register}
        />
      </FormRow>
      <FormRow name="date" label="Data">
        <FormInput
          errors={errors}
          inputName="date"
          register={register}
          formType="datetime-local"
        />
      </FormRow>
      <FormRow name="numOfPlaces" label="Ilość miejsc">
        <FormInput
          errors={errors}
          inputName="numOfPlaces"
          register={register}
          formType="number"
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
        <StyledButton styleType="add">Dodaj</StyledButton>
      </div>
    </Form>
  );
}

export default CreateScheduleForm;
