import { useQuery } from "@tanstack/react-query";

import { taskApi } from "../api";

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => taskApi.getTasks(),
  });
};
