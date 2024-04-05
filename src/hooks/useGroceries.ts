import { fetchAllGroceries } from "@/services/";
import { useQuery } from "@tanstack/react-query";

export const useGroceries = () => {
  return useQuery({
    queryKey: ["groceries"],
    queryFn: () => fetchAllGroceries(),
    select: ({ data }) => data,
  });
};
