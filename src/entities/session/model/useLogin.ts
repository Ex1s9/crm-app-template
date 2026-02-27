import { authApi, setToken } from "@shared/api";
import type { LoginRequest } from "@shared/api";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () =>
  useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),
    onSuccess: (result) => {
      setToken(result.data.access_token);
    },
  });
