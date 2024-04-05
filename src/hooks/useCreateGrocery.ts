import { createGroceryItem } from "@/services/";
import { ICreateGroceryItemInput } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateGrocery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createGrocery"],
    mutationFn: ({ name, amount }: ICreateGroceryItemInput) =>
      createGroceryItem(name, amount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["groceries"] });
    },
  });
};
