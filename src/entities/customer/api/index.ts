import { api } from "@shared/api";

import {
  CreateCustomerRequest,
  CustomerUpdate,
  GetCustomer,
} from "../model/types";

export const customerApi = {
  getCustomers: () => api.get<GetCustomer>("/api/customers"),
  createCustomer: (data: CreateCustomerRequest) =>
    api.post<CustomerUpdate>("/api/customers", data),
};
