import { useMutation, useQueryClient } from "@tanstack/react-query";

import { dealApi } from "../api";
import { dealKeys } from "./queryKeys";
import { CreateDealBody } from "./types";

export const useCreateDeal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateDealBody) => dealApi.createDeal(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: dealKeys.all });
    },
  });
};
