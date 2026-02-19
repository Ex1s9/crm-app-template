import { api } from "@shared/api";

import {
  CreateDealBody,
  Deal,
  GetDeals,
  GetDealsById,
  GetProgressDeal,
} from "../model/types";

export const dealApi = {
  getDeals: (params?: { page?: number; limit?: number }) =>
    api.get<GetDeals>("/api/deals", { params }),

  getDealById: (id: number) => api.get<GetDealsById>(`/api/deals/${id}`),

  createDeal: (data: CreateDealBody) => api.post<Deal>("/api/deals", data),

  updateDeal: (id: number, data: Partial<CreateDealBody>) =>
    api.put<Deal>(`/api/deals/${id}`, data),

  getProgressOptions: () =>
    api.get<GetProgressDeal>("/api/deals/progress-options"),
};
