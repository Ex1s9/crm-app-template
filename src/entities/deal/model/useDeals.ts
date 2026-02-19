import { useQuery } from "@tanstack/react-query";

import { dealApi } from "../api";

export const useDeals = () => {
  return useQuery({
    queryKey: ["deals"],
    queryFn: () => dealApi.getDeals(),
  });
};
