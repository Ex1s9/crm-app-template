import { useMutation, useQueryClient } from "@tanstack/react-query";

import { taskApi } from "../api";
import { taskKeys } from "./queryKeys";
import { CreateTaskRequest } from "./types";

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTaskRequest) => taskApi.createTask(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: taskKeys.all });
    },
  });
};
