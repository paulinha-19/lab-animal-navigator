import { CalculationAdministeredForm } from "@/schemas/calculation-administered";
import { UseFormReset } from "react-hook-form";

type ResultsType = {
  grams: number;
  kg: number;
  species: string;
  lineage: string;
  phase: string;
} | null;

export const onSubmit = (
  data: CalculationAdministeredForm,
  setResults: React.Dispatch<React.SetStateAction<ResultsType>>,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const numberAnimals = parseFloat(data.numberAnimals as any);
  const amountFeed = parseFloat(data.amountFeed as any);

  if (!isNaN(numberAnimals) && !isNaN(amountFeed)) {
    const grams = numberAnimals * amountFeed;
    const kg = grams / 1000;

    setResults({
      grams,
      kg,
      species: data.selectSpecies,
      lineage: data.selectLineage,
      phase: data.selectPhaseLife,
    });

    setShowModal(true);
  } else {
    console.error("Os valores fornecidos não são números válidos.");
  }
};

export const handleCloseModal = (
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  reset: UseFormReset<CalculationAdministeredForm>,
  setResults: React.Dispatch<React.SetStateAction<ResultsType>>
) => {
  setShowModal(false);
  reset();
  setResults(null);
};
