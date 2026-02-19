import { z } from "zod";

export const taskFormSchema = z.object({
  owner: z.coerce.number().min(1, "Owner обязателен"),
  description: z.string().min(1, "Описание обязательно"),
  due_date: z.string().min(1, "Дата обязательна"),
  completed: z.boolean(),
});

export type TaskFormData = z.infer<typeof taskFormSchema>;
