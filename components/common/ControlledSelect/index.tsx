import React, { ReactNode, useState } from "react";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";
import { PickerProps } from "@react-native-picker/picker";
import { Text, View, StyleSheet } from "react-native";

type AditionalInput = {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  errorColor?: string;
  sizeError?: number;
  paddingBottom?: number;
  paddingTop?: number;
  placeholderColor?: string;
  borderColorInputFocus?: string;
  borderColorInputBlur?: string;
  backgroundColorInput?: string;
  borderRadius?: number;
  colorLabel?: string;
  sizeLabel?: number;
  options: string[];
  placeholder?: string;
  heightInput?: number;
  colorValue?: string;
} & PickerProps;

export function ControlledSelect<FormType extends FieldValues>({
  control,
  name,
  label,
  options,
  placeholder = "Escolha uma opção",
  errorColor = "red",
  sizeError = 12,
  paddingBottom,
  paddingTop,
  colorLabel = "white",
  sizeLabel = 16,
  placeholderColor = "#ECEDEE",
  borderColorInputFocus,
  borderColorInputBlur,
  backgroundColorInput = "#7589A4",
  borderRadius = 8,
  heightInput = 50,
  colorValue = "#000",
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
      render={({ field: { onChange, value }, fieldState: { error } }) => (
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
              styles.inputContainer,
              {
                borderRadius: borderRadius,
                height: heightInput + 10,
              },
            ]}
          >
            <Picker
              selectedValue={value}
              onValueChange={onChange}
              style={[
                styles.picker,
                {
                  backgroundColor: backgroundColorInput,
                  color: placeholderColor,
                  borderColor: isFocused
                    ? borderColorInputFocus
                    : borderColorInputBlur,
                  borderWidth: 2.5,
                },
              ]}
              onBlur={handleBlur}
              onFocus={handleFocus}
            >
              <Picker.Item
                label={placeholder}
                value=""
                enabled={false}
                style={[styles.placeholder]}
              />
              {options.map((option, index) => (
                <Picker.Item key={index} label={option} value={option} />
              ))}
            </Picker>
          </View>
          {error && (
            <Text
              style={[styles.error, { color: errorColor, fontSize: sizeError }]}
            >
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: "#fff",
    marginBottom: 5,
  },
  inputContainer: {
    overflow: "hidden",
    justifyContent: "center", // Garante que o conteúdo fique centralizado
  },
  picker: {
    height: "100%",
    textAlignVertical: "center", // Centraliza o texto verticalmente
  },
  error: {
    color: "red",
    fontSize: 12,
  },
  placeholder: {
    textAlignVertical: "center", // Centraliza verticalmente
  },
});
