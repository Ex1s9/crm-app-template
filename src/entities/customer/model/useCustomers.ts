import { useQuery } from "@tanstack/react-query";

import { customerApi } from "../api";

export const useCustomers = () => {
  return useQuery({
    queryKey: ["customers"],
    queryFn: () => customerApi.getCustomers(),
  });
};
