import { updateGroceryItem } from "@/services/";
import { IUpdateGroceryItemInput } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateGrocery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateGrocery"],
    mutationFn: ({ id, data }: { id: number; data: IUpdateGroceryItemInput }) =>
      updateGroceryItem(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["groceries"] });
    },
  });
};
