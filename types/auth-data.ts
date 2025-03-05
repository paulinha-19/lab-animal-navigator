import { z } from "zod";
import { tokenResetPasswordSchema } from "@/schemas/index";

export type PasswordEmail = {
  email: string;
  password: string;
};

export type TokenType = {
  token: string;
};

export type ResetType = {
  newPassword: string;
};

export type ForgotPasswordType = {
  email: string;
};

export type UserDataType = {
  token: string;
  message: string;
};

export type TokenResetPasswordType = z.infer<typeof tokenResetPasswordSchema>;
