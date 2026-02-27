export type CustomerDTO = {
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

export type GetCustomersDTO = {
  customers: CustomerDTO[];
  total: number;
  page: number;
  pages: number;
};

export type CustomerUpdateDTO = {
  message: string;
  customer: CustomerDTO;
};

export type CreateCustomerDTO = {
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
