import React, { memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Box } from "../ui/box";

interface SectionItemProps {
  title: string;
  items: { label: string; urls: { name: string; url: string }[] }[];
}

export const SectionItem = memo(({ title, items }: SectionItemProps) => {
  const handlePress = (
    label: string,
    urls: { name: string; url: string }[]
  ) => {
    if (urls.length === 1) {
      Linking.openURL(urls[0].url).catch(() =>
        Alert.alert("Erro", "Não foi possível abrir a URL")
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
    <View style={styles.section}>
      <Box style={styles.containerSectionTitle}>
        <Text style={styles.sectionTitle}>{title}</Text>
      </Box>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(item.label, item.urls)}
        >
          {/* <View key={index}> */}
          <View style={styles.resultItem}>
            <Text style={styles.itemText}>{item.label}</Text>
            <Feather name="chevron-right" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  section: {
    paddingVertical: 10,
  },
  containerSectionTitle: {
    backgroundColor: "#fff"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#737373",
    paddingStart: 5,
  },
  itemText: {
    fontSize: 16,
    color: "#ffffff",
    paddingVertical: 10,
    paddingStart: 2,  
  },
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 1,
    width: "100%",
  },
});
