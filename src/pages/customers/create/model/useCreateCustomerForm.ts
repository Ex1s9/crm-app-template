import { customerApi } from "@entities/customer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  CreateCustomerFormData,
  createCustomerSchema,
} from "../lib/validation";

export const useCreateCustomerForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCustomerFormData>({
    resolver: zodResolver(createCustomerSchema),
    mode: "onChange",
  });

  const mutation = useMutation({
    mutationFn: (data: CreateCustomerFormData) =>
      customerApi.createCustomer(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      navigate("/");
    },
  });

  const onSubmit = (data: CreateCustomerFormData) => mutation.mutate(data);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    mutation,
  };
};
