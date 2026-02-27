import { useQuery } from "@tanstack/react-query";

import { taskApi } from "../api";
import { taskKeys } from "./queryKeys";

export const useTasks = () => {
  return useQuery({
    queryKey: taskKeys.all,
    queryFn: () => taskApi.getTasks(),
  });
};
