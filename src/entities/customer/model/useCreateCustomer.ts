import { useMutation, useQueryClient } from "@tanstack/react-query";

import { customerApi } from "../api";
import { customerKeys } from "./queryKeys";
import { CreateCustomerRequest } from "./types";

export const useCreateCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCustomerRequest) =>
      customerApi.createCustomer(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: customerKeys.all });
    },
  });
};
