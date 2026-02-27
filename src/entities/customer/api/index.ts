import { api } from "@shared/api";

import { CreateCustomerDTO, CustomerUpdateDTO, GetCustomersDTO } from "./types";

export const customerApi = {
  getCustomers: () => api.get<GetCustomersDTO>("/api/customers"),
  createCustomer: (data: CreateCustomerDTO) =>
    api.post<CustomerUpdateDTO>("/api/customers", data),
};
