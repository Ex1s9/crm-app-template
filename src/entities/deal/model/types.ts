export type Deal = {
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

export type GetDeals = {
  deals: Deal[];
  total: number;
  page: number;
  pages: number;
};

export type UpdateDeal = {
  message: string;
  deal: Deal;
};

export type GetDealsById = {
  deals: Deal;
};

export type ProgressOption = {
  label: string;
  value: string;
};

export type GetProgressDeal = {
  progressOptions: ProgressOption[];
};

export type CreateDealBody = {
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
