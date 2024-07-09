import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditTrainers } from "../../services/apiTrainers";
import { NewTrainerDataTypes } from "../../types/trainersTypes";

export function useCreateTrainer() {
  const queryClient = useQueryClient();

  const { mutate: createTrainer } = useMutation({
    mutationFn: (newTrainers: NewTrainerDataTypes) =>
      addOrEditTrainers(newTrainers),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["trainers"],
      });
      toast.success("Trener został dodany!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { createTrainer };
}
