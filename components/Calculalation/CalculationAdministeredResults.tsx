import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CalculationAdministeredResultsProps {
  results: {
    grams: number;
    kg: number;
    species: string;
    lineage: string;
    phase: string;
  };
}

export const CalculationAdministeredResults = ({
  results,
}: CalculationAdministeredResultsProps) => {
  return (
    <View>
      <Text style={styles.modalText}>Espécie: {results.species}</Text>
      <Text style={styles.modalText}>Linhagem: {results.lineage}</Text>
      <Text style={styles.modalText}>Fase da vida: {results.phase}</Text>
      <Text style={styles.modalText}>
        Quantidade de oferta de ração diária (g): {results.grams} g
      </Text>
      <Text style={styles.modalText}>
        Quantidade de oferta de ração diária (kg): {results.kg.toFixed(3)} kg
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modalText: {
    fontSize: 16,
    color: "black",
    marginVertical: 5,
  },
});
