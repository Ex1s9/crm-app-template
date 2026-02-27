import { api } from "@shared/api";

import {
  CreateDealDTO,
  DealDTO,
  GetDealsDTO,
  GetDealByIdDTO,
  GetProgressDealDTO,
} from "./types";

export const dealApi = {
  getDeals: (params?: { page?: number; limit?: number }) =>
    api.get<GetDealsDTO>("/api/deals", { params }),

  getDealById: (id: number) => api.get<GetDealByIdDTO>(`/api/deals/${id}`),

  createDeal: (data: CreateDealDTO) => api.post<DealDTO>("/api/deals", data),

  updateDeal: (id: number, data: Partial<CreateDealDTO>) =>
    api.put<DealDTO>(`/api/deals/${id}`, data),

  getProgressOptions: () =>
    api.get<GetProgressDealDTO>("/api/deals/progress-options"),
};
