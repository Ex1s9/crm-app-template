import { useMutation, useQueryClient } from "@tanstack/react-query";

import { taskApi } from "../api";

export const useDeleteTask = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => taskApi.deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
