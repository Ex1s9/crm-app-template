import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { authApi, setToken } from "@shared/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { RegistrationFormData, registrationSchema } from "../lib/validation";

export const useRegistrationForm = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      setApiError(null);
      const { confirmPassword: _confirmPassword, ...rest } = data;
      const result = await authApi.register(rest);
      setToken(result.data.access_token);
      navigate("/");
    } catch (err) {
      const error = err as { response?: { data?: { message?: string } } };
      setApiError(error.response?.data?.message || "Ошибка при регистрации");
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    apiError,
  };
};
