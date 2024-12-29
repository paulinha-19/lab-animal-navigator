import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Divider } from "@/components";

interface SearchResultsProps {
  filteredData: string[];
}

export const SearchResults = ({ filteredData }: SearchResultsProps) => {
  return (
    <View>
      {filteredData.length > 0 ? (
        <>
          <Text style={styles.resultsText}>
            {`${filteredData.length} resultados encontrados`}
          </Text>
          {filteredData.map((item, index) => (
            <View key={index}>
              <View style={styles.resultItem}>
                <Text style={styles.resultText}>{item}</Text>
                <Feather name="chevron-right" size={20} color="#fff" />
              </View>
              <Divider />
            </View>
          ))}
        </>
      ) : (
        <Text style={styles.resultsText}>Nenhum resultado encontrado</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  resultsText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  resultText: {
    color: "#fff",
    fontSize: 16,
  },
});
