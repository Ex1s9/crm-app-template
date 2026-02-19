import { useMutation, useQueryClient } from "@tanstack/react-query";

import { taskApi } from "../api";
import { CreateTaskRequest } from "./types";

export const useUpdateTask = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTaskRequest) => taskApi.updateTask(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
