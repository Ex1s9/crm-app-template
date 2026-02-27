import { useLogin } from "@entities/session";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { LoginFormData, loginSchema } from "../lib/validation";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const mutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormData) =>
    mutation.mutate(data, { onSuccess: () => navigate("/") });

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    mutation,
  };
};
