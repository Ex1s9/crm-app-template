import { useRegister } from "@entities/session";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { RegistrationFormData, registrationSchema } from "../lib/validation";

export const useRegistrationForm = () => {
  const navigate = useNavigate();
  const mutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
  });

  const onSubmit = (data: RegistrationFormData) => {
    const { confirmPassword: _confirmPassword, ...rest } = data;
    mutation.mutate(rest, { onSuccess: () => navigate("/") });
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    mutation,
  };
};
