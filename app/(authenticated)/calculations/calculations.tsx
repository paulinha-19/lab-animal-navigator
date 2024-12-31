import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Href, router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import { calculationsData } from "@/data/calculations";
export default function CalculationRootScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          ...styles.container,
          backgroundColor: Colors.light.background,
        }}
      >
        <View style={{ marginTop: 15 }}>
          {calculationsData.map((item, index) => (
            <View key={index}>
              <View style={styles.resultItem}>
                <Text
                  style={styles.resultText}
                  onPress={() => router.push(item.href as Href)}
                >
                  {item.text}
                </Text>
                <Feather
                  name="chevron-right"
                  size={20}
                  color="#fff"
                  onPress={() => router.push(item.href as Href)}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  resultText: {
    color: "#fff",
    fontSize: 16,
  },
});
