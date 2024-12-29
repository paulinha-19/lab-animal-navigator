import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface HeaderProps {
  children: React.ReactNode;
  colors?: readonly [string, string, ...string[]];
}
export const Header = ({
  children,
  colors = ["#153d72", "#153d72"],
}: HeaderProps) => {
  const hasMultipleChildren = React.Children.count(children) > 1;

  return (
    <LinearGradient
      colors={colors}
      style={styles.gradientBackground}
      start={{ x: -0.8, y: 1 }}
      end={{ x: 1.2, y: 1 }}
    >
      <View
        style={[
          styles.container,
          hasMultipleChildren ? styles.row : styles.alignStart,
        ]}
      >
        {children}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    width: "100%",
  },
  container: {
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  alignStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
