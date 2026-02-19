import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { authApi, setToken } from "@shared/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { LoginFormData, loginSchema } from "../lib/validation";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setApiError(null);
      const result = await authApi.login(data);
      setToken(result.data.access_token);
      navigate("/");
    } catch (err) {
      const error = err as { response?: { data?: { message?: string } } };
      setApiError(error.response?.data?.message || "Ошибка при входе");
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
