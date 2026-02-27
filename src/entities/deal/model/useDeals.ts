import { useQuery } from "@tanstack/react-query";

import { dealApi } from "../api";
import { dealKeys } from "./queryKeys";

export const useDeals = () => {
  return useQuery({
    queryKey: dealKeys.all,
    queryFn: () => dealApi.getDeals(),
  });
};
