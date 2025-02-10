import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Colors } from "@/constants/Colors";
import { useAuth } from "@/hooks/useAuth";
import { Text } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.light.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.background,
  },
});
