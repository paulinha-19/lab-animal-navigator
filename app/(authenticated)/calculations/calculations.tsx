import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
import { Href, router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import { calculationsData } from "@/data/calculations";
export default function CalculationRootScreen() {

  const handlePress = (item: { href: string; text: string }) => {
    if (item.text === "Cálculo de doses") {
      Alert.alert(
        "Em desenvolvimento",
        "Essa funcionalidade estará disponível em breve!"
      );
    } else {
      router.push(item.href as Href);
    }
  };

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
                  onPress={() => handlePress(item)}
                >
                  {item.text}
                </Text>
                <Feather
                  name="chevron-right"
                  size={20}
                  color="#fff"
                  onPress={() => handlePress(item)}
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
