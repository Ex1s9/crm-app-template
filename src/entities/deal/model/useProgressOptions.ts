import { useQuery } from "@tanstack/react-query";

import { dealApi } from "../api";
import { dealKeys } from "./queryKeys";

export const useProgressOptions = () =>
  useQuery({
    queryKey: dealKeys.progressOptions,
    queryFn: () => dealApi.getProgressOptions(),
    staleTime: Infinity,
  });
