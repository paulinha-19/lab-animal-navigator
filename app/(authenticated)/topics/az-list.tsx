import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView
} from "react-native";
import { SectionItem } from "@/components";
import { DATA } from "../../../data/az-list";
import { useAlphabetNavigation } from "@/hooks/useAlphabetNavigation";
import { Colors } from "@/constants/Colors";

export default function AZListScreen() {
  const { listRef } =
    useAlphabetNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          ref={listRef}
          data={DATA}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <SectionItem title={item.key} items={item.items} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.light.background,
  },
});
