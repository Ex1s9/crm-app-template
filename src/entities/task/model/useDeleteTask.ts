import { useMutation, useQueryClient } from "@tanstack/react-query";

import { taskApi } from "../api";
import { taskKeys } from "./queryKeys";

export const useDeleteTask = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => taskApi.deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: taskKeys.all });
    },
  });
};
