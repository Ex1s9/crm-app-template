import { useInfiniteQuery } from "@tanstack/react-query";

import { dealApi } from "../api";
import { dealKeys } from "./queryKeys";

const LIMIT = 10;

export const useDealsInfinite = () =>
  useInfiniteQuery({
    queryKey: dealKeys.infinite,
    queryFn: ({ pageParam }) =>
      dealApi.getDeals({ page: pageParam, limit: LIMIT }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, pages } = lastPage.data;
      return page < pages ? page + 1 : undefined;
    },
  });
