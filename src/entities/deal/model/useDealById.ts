import { useQuery } from "@tanstack/react-query";

import { dealApi } from "../api";
import { dealKeys } from "./queryKeys";

export const useDealById = (id: number) =>
  useQuery({
    queryKey: dealKeys.byId(id),
    queryFn: () => dealApi.getDealById(id),
    select: (data) => data.data.deal,
    enabled: !!id,
  });
