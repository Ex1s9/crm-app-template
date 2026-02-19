import { taskApi } from "@entities/task";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { CreateTaskFormData, createTaskSchema } from "../lib/validation";

export const useCreateTaskForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTaskFormData>({
    resolver: zodResolver(createTaskSchema),
    mode: "onChange",
    defaultValues: {
      completed: false,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: CreateTaskFormData) =>
      taskApi.createTask({
        ...data,
        due_date: new Date(data.due_date).toISOString(),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      navigate("/");
    },
  });

  const onSubmit = (data: CreateTaskFormData) => mutation.mutate(data);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    mutation,
  };
};
