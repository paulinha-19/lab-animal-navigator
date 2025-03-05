import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomAlert } from "../CustomAlert";
import { Button, ButtonText } from "../ui/button";
import { handlePress } from "@/utils/handlePress";

interface UrlSelectionModalProps {
  selectedItem: { label: string; urls: { name: string; url: string }[] } | null;
  setSelectedItem: (item: { label: string; urls: { name: string; url: string }[] } | null) => void;
}
export const UrlSelectionModal = ({ selectedItem, setSelectedItem }: UrlSelectionModalProps) => {
  if (!selectedItem || selectedItem.urls.length <= 1) return null;

  return (
    <CustomAlert
      visible={!!selectedItem}
      heading={selectedItem.label}
      subtitle="Selecione uma opção:"
      onClose={() => setSelectedItem(null)}
    >
      {selectedItem.urls.map((item, index) => (
        <View key={index} style={styles.footerContainer}>
          <Button
            onPress={() => {
              handlePress({ label: item.name, urls: [item] }, setSelectedItem);
            }}
            variant="outline"
            action="primary"
          >
            <ButtonText>{item.name}</ButtonText>
          </Button>
        </View>
      ))}
    </CustomAlert>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 10,
  },
});