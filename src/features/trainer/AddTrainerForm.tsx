import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateTrainer } from "./useCreateTrainer";
import { useEditTrainer } from "./useEditTrainer";
import { schema } from "../../validation/TrainersValidation";
import { NewTrainerDataTypes } from "../../types/trainersTypes";
import FormRow from "../../ui/FormRow";
import FormInput from "../../ui/FormInput";
import Form from "../../ui/Form";
import ButtonsContainer from "../../ui/ButtonsContainer";

interface PropsType {
  handleCloseModal?: () => void;
  trainer?: NewTrainerDataTypes & { id: string };
}

function AddTrainerForm({
  trainer = {} as NewTrainerDataTypes & { id: string },
  handleCloseModal,
}: PropsType) {
  const { createTrainer } = useCreateTrainer();
  const { editTrainer } = useEditTrainer();
  const { id, ...trainerEditData } = trainer;
  const isEditingSession = Boolean(id);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: isEditingSession ? trainerEditData : {},
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = (newTrainer: NewTrainerDataTypes) => {
    const image =
      typeof newTrainer.image === "string"
        ? newTrainer.image
        : newTrainer.image?.[0];
    if (isEditingSession) {
      editTrainer({
        newTrainersData: { ...newTrainer, image } as NewTrainerDataTypes,
        id,
      });
    } else {
      createTrainer({ ...newTrainer, image } as NewTrainerDataTypes);
    }
    handleCloseModal?.();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow name="name" label="Imię i nazwisko:">
        <FormInput
          errors={errors}
          inputName="name"
          register={register}
          formType="text"
        />
      </FormRow>
      <FormRow name="category" label="Kategoria:">
        <FormInput
          errors={errors}
          inputName="category"
          register={register}
          formType="text"
        />
      </FormRow>

      <FormRow name="price" label="Cena:">
        <FormInput
          errors={errors}
          inputName="price"
          register={register}
          formType="number"
        />
      </FormRow>

      <FormRow name="phone" label="Telefon:">
        <FormInput
          errors={errors}
          inputName="phone"
          register={register}
          formType="tel"
        />
      </FormRow>

      <label
        htmlFor="image"
        className="my-4 w-36 border-2  border-accentColor1 bg-slate-500 px-2 py-1 text-center text-sm font-semibold uppercase text-slate-900"
      >
        Dodaj zdjęcie
        <input
          type="file"
          id="image"
          {...register("image")}
          className="absolute z-[-1] h-[0.1px] w-[0.1px] overflow-hidden"
          accept="image/png, image/jpeg"
        />
        {errors.image?.message && (
          <p className="col-start-4 col-end-7 text-[12px] md:text-sm">
            {errors.image.message?.toString()}
          </p>
        )}
      </label>
      <ButtonsContainer
        isEditingSession={isEditingSession}
        handleClick={() => handleCloseModal?.()}
      />
    </Form>
  );
}

export default AddTrainerForm;
