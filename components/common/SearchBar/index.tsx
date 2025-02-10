import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useInputFocus } from "@/hooks/useInputFocus";

interface SearchBarProps {
  borderColorInputFocus?: string;
  borderColorInputBlur?: string;
  onSearch: (query: string) => void;
  searchQuery: string;
}
export const SearchBar = ({
  borderColorInputBlur = "#fff",
  borderColorInputFocus = "#153d72",
  onSearch,
  searchQuery,
}: SearchBarProps) => {
  const { isFocused, handleFocus, handleBlur } = useInputFocus();

  return (
    <View
      style={[
        styles.searchBarContainer,
        {
          borderColor: isFocused ? borderColorInputFocus : borderColorInputBlur,
          borderWidth: 0.5,
        },
      ]}
    >
      <MaterialIcons name="search" size={24} color="#737373" />
      <TextInput
        placeholder="Procurar assunto"
        placeholderTextColor="#737373"
        style={[styles.input]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={searchQuery}
        onChangeText={(text: string) => onSearch(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    height: 40,
    backgroundColor: "white",
    paddingHorizontal: 10,
    width: "100%", //flex: 1
  },
  input: {
    flex: 1,
    color: "#737373",
    fontSize: 16,
  },
});
