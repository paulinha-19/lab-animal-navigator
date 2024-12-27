import React from "react";
import { View, StyleSheet } from "react-native";

export const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: "#D3D3D3",
    marginHorizontal: 15,
  },
});
