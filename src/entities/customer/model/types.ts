export type Customer = {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  owner: number;
};

export type GetCustomer = {
  customers: Customer[];
  total: number;
  page: number;
  pages: number;
};

export type CustomerUpdate = {
  message: string;
  customer: Customer;
};

export type CreateCustomerRequest = {
  first_name: string;
  last_name: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  avatar?: File;
  phone?: string;
};
