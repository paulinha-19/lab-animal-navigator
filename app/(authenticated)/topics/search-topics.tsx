import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { SearchBar, Header } from "@/components/common/index";
import { SearchResults } from "@/components/SearchResults";
import { Colors } from "@/constants/Colors";
import { Box } from "@/components/ui/box";
import { useSearch } from "@/hooks/useSearch";
import AZListScreen from "./az-list";

export default function SearchTopicsScreen() {
  const { searchQuery, filteredData, handleSearch } = useSearch();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
        <Box className="bg-primary-500" style={styles.containerHeader}>
          <Header>
            <SearchBar onSearch={handleSearch} searchQuery={searchQuery} />
          </Header>
        </Box>

        <Box style={styles.contentContainer}>
          {searchQuery.length >= 3 ? (
            <SearchResults filteredData={filteredData} />
          ) : (
            <AZListScreen />
          )}
        </Box>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  azText: {
    color: "#fff",
    fontSize: 16,
  },
  contentContainer: {
    padding: 15,
    alignItems: "center",
    marginTop: 20,
    flex: 1,
  },
  containerHeader: {
    marginTop: 5,
  },
});
