import { useMutation, useQueryClient } from "@tanstack/react-query";

import { dealApi } from "../api";
import { dealKeys } from "./queryKeys";
import { CreateDealBody } from "./types";

export const useUpdateDeal = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<CreateDealBody>) => dealApi.updateDeal(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: dealKeys.all });
    },
  });
};
