import { z } from "zod";

const calculationAdministeredSchema = z.object({
  selectSpecies: z.string().nonempty("Campo obrigatório"),
  selectLineage: z.string().nonempty("Campo obrigatório"),
  selectPhaseLife: z.string().nonempty("Campo obrigatório"),
  numberAnimals: z
    .union([
      z.string().refine((val) => val === "", "Campo obrigatório"),
      z.number().min(1, "O valor deve ser maior que 0"),
    ])
    .transform((val) =>
      typeof val === "string" && val !== "" ? parseFloat(val) : val
    )
    .refine((val) => typeof val === "number" && !isNaN(val), {
      message: "O valor deve ser um número válido",
    }),
  amountFeed: z
    .union([
      z.string().refine((val) => val === "", "Campo obrigatório"),
      z.number().min(1, "O valor deve ser maior que 0"),
    ])
    .transform((val) =>
      typeof val === "string" && val !== "" ? parseFloat(val) : val
    )
    .refine((val) => typeof val === "number" && !isNaN(val), {
      message: "O valor deve ser um número válido",
    }),
});

export default calculationAdministeredSchema;

export type CalculationAdministeredForm = z.infer<
  typeof calculationAdministeredSchema
>;
