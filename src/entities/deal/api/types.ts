export type DealDTO = {
  id: number;
  owner: number;
  customer: number;
  room_images: string[];
  address_city: string;
  address_state: string;
  address_street: string;
  address_zip_code: string;
  room_area: number;
  number_of_people: number;
  appointment_date: string;
  special_instructions: string;
  room_access: "keys_with_doorman" | "fingerprint";
  price: number;
  progress: "in_progress" | "closed";
};

export type GetDealsDTO = {
  deals: DealDTO[];
  total: number;
  page: number;
  pages: number;
};

export type UpdateDealDTO = {
  message: string;
  deal: DealDTO;
};

export type EmbeddedCustomer = {
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

export type DealDetailDTO = Omit<DealDTO, "customer"> & {
  customer?: EmbeddedCustomer;
};

export type GetDealByIdDTO = {
  deal: DealDetailDTO;
};

export type ProgressOptionDTO = {
  label: string;
  value: string;
};

export type GetProgressDealDTO = {
  progressOptions: ProgressOptionDTO[];
};

export type CreateDealDTO = {
  room_images?: string[];
  customer: number;
  address_city: string;
  address_state: string;
  address_street?: string;
  address_zip_code: string;
  room_area: number;
  number_of_people: number;
  appointment_date: string;
  special_instructions?: string;
  room_access: "keys_with_doorman" | "fingerprint";
  price: number;
  progress: "in_progress" | "closed";
};
