import React, { ReactNode, useState } from "react";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { Colors } from "@/constants/Colors";
import {
  TextInput,
  TextInputProps,
  Text,
  View,
  StyleSheet,
} from "react-native";

type AditionalInput = {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  errorMessage?: string;
  errorColor?: string;
  paddingBottom?: number;
  paddingTop?: number;
  placeholderColor?: string;
  inputTextColor?: string;
  borderColorInputFocus?: string;
  borderColorInputBlur?: string;
  backgroundColorInput?: string;
  borderRadius?: number;
  colorLabel?: string;
  sizeLabel?: number;
} & TextInputProps;

export function ControlledInput<FormType extends FieldValues>({
  control,
  name,
  leftIcon,
  rightIcon,
  errorMessage,
  errorColor = "red",
  paddingBottom,
  paddingTop,
  label,
  colorLabel = "white",
  sizeLabel = 16,
  placeholderColor,
  inputTextColor = "white",
  borderColorInputFocus,
  borderColorInputBlur,
  backgroundColorInput = Colors.light.text,
  borderRadius = 8,
  ...textInputProps
}: UseControllerProps<FormType> & AditionalInput) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <View style={styles.container}>
          {label && (
            <Text
              style={[styles.label, { fontSize: sizeLabel, color: colorLabel }]}
            >
              {label}
            </Text>
          )}
          <View
            style={[
              styles.textInputContainer,
              {
                borderRadius: borderRadius,
                borderColor: isFocused
                  ? borderColorInputFocus
                  : borderColorInputBlur,
                borderWidth: 2.5,
              },
            ]}
          >
            {leftIcon && (
              <View style={styles.iconLeftContainer}>{leftIcon}</View>
            )}
            <TextInput
              {...textInputProps}
              onChangeText={field.onChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={field.value}
              placeholderTextColor={placeholderColor}
              style={[
                {
                  color: inputTextColor,
                  backgroundColor: backgroundColorInput,
                },
                textInputProps.style,
                styles.input,
              ]}
            />
            {rightIcon && (
              <View style={styles.iconRightContainer}>{rightIcon}</View>
            )}
            {errorMessage && (
              <Text style={[styles.errorMessage, { color: errorColor }]}>
                {errorMessage}
              </Text>
            )}
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20, // Spacing between fields
    position: "relative",
  },
  label: {
    marginBottom: 8,
  },
  textInputContainer: {
    flexDirection: "row", // Aligns the icon and input field horizontally
    backgroundColor: "#7589A4",
    position: "relative",
  },
  iconLeftContainer: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconRightContainer: {
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1, // The input field takes up the remaining space
    borderRadius: 8,
    height: 50,
  },
  errorMessage: {
    position: "absolute",
    bottom: -20,
    left: 0,
    fontSize: 12,
  },
});
