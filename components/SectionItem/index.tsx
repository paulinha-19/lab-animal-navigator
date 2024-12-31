import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Divider } from "../common/Divider";

interface SectionItemProps {
  title: string;
  items: string[];
}

export const SectionItem = memo(({ title, items }: SectionItemProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {items.map((item, index) => (
      <View key={index}>
        <View style={styles.resultItem}>
          <Text key={index} style={styles.itemText}>
            {item}
          </Text>
          <Feather name="chevron-right" size={20} color="#fff" />
        </View>
      </View>
    ))}
  </View>
));

const styles = StyleSheet.create({
  section: {
    paddingVertical: 10,
    paddingStart: 5,
    paddingEnd: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#b9b7b7",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    paddingStart: 5
  },
  itemText: {
    fontSize: 16,
    color: "#ffffff",
    paddingVertical: 10,
  },
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 1,
    width: "100%",
  },
});
