import { useQuery } from "@tanstack/react-query";

import { customerApi } from "../api";
import { customerKeys } from "./queryKeys";

export const useCustomers = () => {
  return useQuery({
    queryKey: customerKeys.all,
    queryFn: () => customerApi.getCustomers(),
  });
};
