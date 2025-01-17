import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Divider } from "@/components";

interface SearchResultItem {
  label: string;
  urls: { name: string; url: string }[];
}

interface SearchResultsProps {
  filteredData: SearchResultItem[];
}
export const SearchResults = ({ filteredData }: SearchResultsProps) => {
  const handlePress = (
    label: string,
    urls: { name: string; url: string }[]
  ) => {
    if (urls.length === 1) {
      Linking.openURL(urls[0].url).catch(() =>
        Alert.alert("Erro", "Não foi possível abrir a URL.")
      );
    } else {
      Alert.alert(
        label,
        "Escolha uma das opções:",
        urls.map((item) => ({
          text: item.name,
          onPress: () =>
            Linking.openURL(item.url).catch(() =>
              Alert.alert("Erro", "Não foi possível abrir a URL.")
            ),
        })),
        { cancelable: true }
      );
    }
  };

  return (
    <View>
      {filteredData.length > 0 ? (
        <>
          <Text style={styles.resultsText}>
            {`${filteredData.length} resultados encontrados`}
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
