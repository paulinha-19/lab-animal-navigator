import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Divider } from "@/components";
import { handlePress } from "@/utils/handlePress";

interface SearchResultItem {
  label: string;
  urls: { name: string; url: string }[];
}

interface SearchResultsProps {
  filteredData: SearchResultItem[];
}
export const SearchResults = ({ filteredData }: SearchResultsProps) => {
  return (
    <View>
      {filteredData.length > 0 ? (
        <>
          <Text style={styles.resultsText}>
            {`${filteredData.length} resultado(s) encontrado(s)`}
          </Text>
          {filteredData.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(item.label, item.urls)}
            >
              <View style={styles.resultItem}>
                <Text style={styles.resultText}>{item.label}</Text>
                <Feather name="chevron-right" size={20} color="#fff" />
              </View>
              <Divider />
            </TouchableOpacity>
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
