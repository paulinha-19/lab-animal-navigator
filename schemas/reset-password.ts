import { z } from "zod";

const resetPasswordSchema = z.object({
  newPassword: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .max(32, "A senha deve ter no máximo 32 caracteres"),
});

export default resetPasswordSchema;
