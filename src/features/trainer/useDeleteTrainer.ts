import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTrainer } from "../../services/apiTrainers";

export function useDeleteTrainer() {
  const queryClient = useQueryClient();

  const { mutate: deleteOneTrainer } = useMutation({
    mutationFn: (id: string) => deleteTrainer(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["trainers"],
      });
      toast.success("Trener został usunięty!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteOneTrainer };
}
