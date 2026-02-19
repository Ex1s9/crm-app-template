import axios from "axios";

import { getToken } from "./token";
import { AuthResponse, LoginRequest, RegistrationRequest } from "./types";

// eslint-disable-next-line prefer-destructuring, no-undef
const API_URL = process.env.API_URL;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }

  return config;
});

export { getToken, setToken, removeToken } from "./token";

export const authApi = {
  register: (data: RegistrationRequest) =>
    api.post<AuthResponse>("/api/auth/register", data),

  login: (data: LoginRequest) =>
    api.post<AuthResponse>("/api/auth/login", data),
};
