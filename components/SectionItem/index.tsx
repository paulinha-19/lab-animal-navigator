import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";

interface SectionItemProps {
  title: string;
  items: string[];
}

export const SectionItem = memo(({ title, items }: SectionItemProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {items.map((item, index) => (
      <Text key={index} style={styles.itemText}>
        {item}
      </Text>
    ))}
  </View>
));

const styles = StyleSheet.create({
  section: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#b9b7b7",
    marginBottom: 10
  },
  itemText: {
    fontSize: 16,
    color: "#ffffff",
    paddingVertical: 10,
  },
});
