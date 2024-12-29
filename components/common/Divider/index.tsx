import React from "react";
import { View } from "react-native";

interface DividerProps {
  height?: number;
  backgroundColor?: string;
  marginHorizontal?: number;
  marginVertical?: number;
}

export const Divider = ({
  height = 1,
  backgroundColor = "#ccc",
  marginHorizontal = 0,
  marginVertical = 0,
}: DividerProps) => {
  return (
    <View
      style={{
        height: height,
        backgroundColor: backgroundColor,
        marginHorizontal: marginHorizontal,
        marginVertical: marginVertical
      }}
    />
  );
};
