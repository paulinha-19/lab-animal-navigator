import React from "react";
import { Text, View, Button } from "react-native";
import { router } from "expo-router";
import { index } from "@/styles";

export default function Index() {
  function goToLogin() {
    router.push("/login");
  }

  return (
    <View style={index.container}>
      <Text>LabAnimal Navigator</Text>
      <Button title="Login" onPress={goToLogin} />
    </View>
  );
}
