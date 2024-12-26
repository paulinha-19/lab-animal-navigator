import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Box } from "@/components/ui/box";
import Constants from "expo-constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TokenType } from "@/types/auth-data";
import tokenResetPasswordSchema from "@/schemas/token-reset-password";
import { ControlledInput } from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";

export default function InsertToken() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TokenType>({
    mode: "onChange",
    defaultValues: {
      token: "",
    },
    resolver: zodResolver(tokenResetPasswordSchema),
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background }}>
        <Box className="bg-primary-500" style={styles.containter}>
          <Box style={styles.logoHome}>
            <Image
              style={styles.sizeLogo}
              source={require("../../../assets/images/logo-lab-animal.png")}
            />
          </Box>
          <Text style={styles.textHeader}>Recuperar senha</Text>
          <Box style={styles.containerForm}>
            <View style={styles.contaienerInputs}>
              <ControlledInput
                control={control}
                name="token"
                keyboardType="number-pad"
                placeholder="Insira o token enviado para o email"
                placeholderColor={Colors.dark.text}
                label="Token"
                autoCapitalize="none"
                leftIcon={
                  <MaterialIcons
                    name="generating-tokens"
                    size={24}
                    color={Colors.light.background}
                  />
                }
                errorMessage={errors?.token?.message}
                borderColorInputFocus={Colors.light.text}
                borderColorInputBlur="#7589A4"
                backgroundColorInput="#7589A4"
              />
              <View style={styles.buttonSubmitContainer}>
                <TouchableOpacity
                  onPress={() =>
                    router.navigate("/(not-authenticated)/reset-password/page")
                  }
                >
                  <LinearGradient
                    colors={["#35629d", Colors.light.background]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.buttonSubmit}
                  >
                    <Text style={styles.textButtonSubmit}>Prosseguir</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={styles.containerCreateAccout}>
                <Link href="/">
                  <Text style={[styles.textCreateAccout]}>
                    Já tem uma conta? Faça o login
                  </Text>
                </Link>
              </View>
            </View>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
  },
  logoHome: {
    alignItems: "center",
  },
  sizeLogo: {
    width: 150,
    height: 100,
  },
  textSize: {
    fontSize: 30,
  },
  containerForm: {
    width: "100%",
    alignItems: "center",
  },
  contaienerInputs: {
    width: "85%",
    height: "100%",
  },
  buttonSubmitContainer: {
    alignSelf: "center", // Centers the button horizontally
    marginTop: 30,
  },
  buttonSubmit: {
    padding: 15,
    width: 200,
    borderRadius: 8,
    alignItems: "center", // Centers the content within the View
    justifyContent: "center", // Aligns the content vertically
  },
  textButtonSubmit: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  containerCreateAccout: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  textCreateAccout: { fontSize: 14, color: Colors.light.text },
  textHeader: {
    color: Colors.light.text,
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
  },
});
