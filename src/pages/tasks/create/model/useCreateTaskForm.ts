import { useCreateTask } from "@entities/task";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { CreateTaskFormData, createTaskSchema } from "../lib/validation";

export const useCreateTaskForm = () => {
  const navigate = useNavigate();
  const mutation = useCreateTask();

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

  const onSubmit = (data: CreateTaskFormData) =>
    mutation.mutate(
      { ...data, due_date: new Date(data.due_date).toISOString() },
      { onSuccess: () => navigate("/") },
    );

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    mutation,
  };
};
