import React from "react";
import { Button, Text, View } from "react-native";
import { Link, router } from "expo-router";

export default function Login() {
  const handleLogin = () => {
    router.replace("/authenticated");
  };
  return (
    <View>
      <Text>Page login</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
