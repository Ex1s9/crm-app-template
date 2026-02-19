import { useQuery } from "@tanstack/react-query";

import { dealApi } from "../api";

export const useDealById = (id: number) =>
  useQuery({
    queryKey: ["deals", id],
    queryFn: () => dealApi.getDealById(id),
    enabled: !!id,
  });
