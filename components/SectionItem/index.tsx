import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Box } from "../ui/box";
import { handlePress } from "@/utils/handlePress";
import { UrlSelectionModal } from "../UrlSelectionModal";

interface SectionItemProps {
  title: string;
  items: { label: string; urls: { name: string; url: string }[] }[];
}

export const SectionItem = memo(({ title, items }: SectionItemProps) => {
  const [selectedItem, setSelectedItem] = useState<{
    label: string;
    urls: any[];
  } | null>(null);

  return (
    <View style={styles.section}>
      <Box style={styles.containerSectionTitle}>
        <Text style={styles.sectionTitle}>{title}</Text>
      </Box>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(item, setSelectedItem)}
        >
          <View style={styles.resultItem}>
            <Text style={styles.itemText}>{item.label}</Text>
            <Feather name="chevron-right" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      ))}
      <UrlSelectionModal
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  section: {
    paddingVertical: 10,
  },
  containerSectionTitle: {
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
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
  footerContainer: {
    marginTop: 10,
  },
});
