import { useCreateCustomer } from "@entities/customer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  CreateCustomerFormData,
  createCustomerSchema,
} from "../lib/validation";

export const useCreateCustomerForm = () => {
  const navigate = useNavigate();
  const mutation = useCreateCustomer();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCustomerFormData>({
    resolver: zodResolver(createCustomerSchema),
    mode: "onChange",
  });

  const onSubmit = (data: CreateCustomerFormData) =>
    mutation.mutate(data, { onSuccess: () => navigate("/") });

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    mutation,
  };
};
