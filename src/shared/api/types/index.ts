export type AuthResponse = {
  access_token: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegistrationRequest = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};
