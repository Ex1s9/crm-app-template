import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Неверный формат email" }),
  password: z.string().min(8, "Пароль должен быть не менее 8 символов"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
