import { deleteGroceryItem } from "@/services/";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteGrocery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteGrocery"],
    mutationFn: (id: number) => deleteGroceryItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["groceries"] });
    },
  });
};
