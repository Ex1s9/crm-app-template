import { useInfiniteQuery } from "@tanstack/react-query";

import { dealApi } from "../api";

const LIMIT = 10;

export const useDealsInfinite = () =>
  useInfiniteQuery({
    queryKey: ["deals", "infinite"],
    queryFn: ({ pageParam }) =>
      dealApi.getDeals({ page: pageParam, limit: LIMIT }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, pages } = lastPage.data;
      return page < pages ? page + 1 : undefined;
    },
  });
