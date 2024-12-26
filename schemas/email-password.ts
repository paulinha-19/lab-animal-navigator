import { z } from "zod";

const emailPasswordSchema = z.object({
  email: z.string().email("Insira um email válido"),
  password: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .max(32, "A senha deve ter no máximo 32 caracteres"),
});

export default emailPasswordSchema;
