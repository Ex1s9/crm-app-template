import { useQuery } from "@tanstack/react-query";

import { dealApi } from "../api";

export const useProgressOptions = () =>
  useQuery({
    queryKey: ["deals", "progress-options"],
    queryFn: () => dealApi.getProgressOptions(),
    staleTime: Infinity,
  });
