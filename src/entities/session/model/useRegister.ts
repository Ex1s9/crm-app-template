import { authApi, setToken } from "@shared/api";
import type { RegistrationRequest } from "@shared/api";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () =>
  useMutation({
    mutationFn: (data: RegistrationRequest) => authApi.register(data),
    onSuccess: (result) => {
      setToken(result.data.access_token);
    },
  });
