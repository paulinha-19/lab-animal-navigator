import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import { SearchInfo } from "@/components";
import { SearchBar } from "@/components/common/SearchBar";
import { Header } from "@/components/common/Header";
import { Colors } from "@/constants/Colors";
import { Box } from "@/components/ui/box";
import { router } from "expo-router";
import { useSearch } from "@/hooks/useSearch";
import { SearchResults } from "@/components/SearchResults";

export default function SearchTopicsScreen() {
  const { searchQuery, filteredData, handleSearch } = useSearch();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background }}>
        <Box className="bg-primary-500" style={styles.containerHeader}>
          <Header>
            <SearchBar onSearch={handleSearch} searchQuery={searchQuery}/>
            <Text
              style={styles.azText}
              onPress={() => router.push("/(authenticated)/topics/az-list")}
            >
              A-Z
            </Text>
          </Header>
        </Box>

        {/* Content */}
        <Box style={styles.contentContainer}>
          {searchQuery.length >= 3 ? (
            <SearchResults filteredData={filteredData} />
          ) : (
            <SearchInfo />
          )}
        </Box>
      </ScrollView>
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
  },
  containerHeader: {
    marginTop: 5,
  },
});
