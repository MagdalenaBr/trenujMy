import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTrainers } from "../trainer/useTrainers.ts";
import { useEditSchedules } from "./useEditSchedules.ts";
import { useCreateSchedules } from "./useCreateSchedules.ts";
import { schema } from "../../validation/ScheduleValidation.tsx";
import {
  NewClassesTypes,
  ScheduleDataTypes,
} from "../../types/scheduleTypes.ts";
import FormInput from "../../ui/FormInput.tsx";
import FormOption from "../../ui/FormOption.tsx";
import Spinner from "../../ui/Spinner.tsx";
import Form from "../../ui/Form.tsx";
import ButtonsContainer from "../../ui/ButtonsContainer.tsx";
import FormRow from "../../ui/FormRow.tsx";

interface PropsType {
  handleCloseModal?: () => void;
  classes?: ScheduleDataTypes;
}

function CreateScheduleForm({
  classes = {} as ScheduleDataTypes,
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

  const onSubmit = (data: NewClassesTypes) => {
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

  const typesOfActivities = trainers?.map((trainer) => trainer.category);
  const uniqueTypesOfActivities = [...new Set(typesOfActivities)].filter(
    (trainerCategory) => trainerCategory !== "trener personalny",
  );

  if (trainerIsLoading) return <Spinner />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow name="name" label="Rodzaj zajęć:">
        <FormOption errors={errors} inputName="name" register={register}>
          {uniqueTypesOfActivities?.map((category) => (
            <option key={category} value={category} label={category}></option>
          ))}
        </FormOption>
      </FormRow>

      <FormRow name="trainerId" label="Trener:">
        <FormOption errors={errors} inputName="trainerId" register={register}>
          {trainers?.map((trainer) => (
            <option
              key={trainer.id}
              value={trainer.id}
              label={`${trainer.name}`}
            >
              {trainer.name}
            </option>
          ))}
        </FormOption>
      </FormRow>

      <FormRow name="date" label="Data:">
        <FormInput
          errors={errors}
          inputName="date"
          register={register}
          formType="datetime-local"
        />
      </FormRow>

      <FormRow name="numOfPlaces" label="Ilość miejsc:">
        <FormInput
          errors={errors}
          inputName="numOfPlaces"
          register={register}
          formType="number"
        />
      </FormRow>

      <ButtonsContainer handleClick={() => handleCloseModal?.()} />
    </Form>
  );
}

export default CreateScheduleForm;
