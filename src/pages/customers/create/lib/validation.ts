import { z } from "zod";

export const createCustomerSchema = z.object({
  first_name: z.string().min(1, "Имя обязательно"),
  last_name: z.string().min(1, "Фамилия обязательна"),
  email: z.string().email("Неверный формат email"),
  phone: z
    .string()
    .regex(/^\+\d{10,15}$/, "Формат: +1234567890")
    .optional()
    .or(z.literal("")),
  street: z.string().min(1, "Улица обязательна"),
  city: z.string().min(1, "Город обязателен"),
  state: z.string().min(1, "Штат обязателен"),
  zip: z.string().regex(/^\d{4,8}$/, "Только цифры, от 4 до 8 символов"),
});

export type CreateCustomerFormData = z.infer<typeof createCustomerSchema>;
