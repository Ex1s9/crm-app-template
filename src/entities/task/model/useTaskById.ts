import { useQueryClient } from "@tanstack/react-query";

import { taskKeys } from "./queryKeys";
import { GetTasks, Task } from "./types";

export const useTaskById = (id: number): Task | undefined => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<{ data: GetTasks }>(taskKeys.all);
  return data?.data.tasks.find((task) => task.id === id);
};
