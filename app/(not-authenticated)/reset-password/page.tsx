import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { AxiosError } from "axios";
import { Link, router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Box } from "@/components/ui/box";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { ResetType } from "@/types/index";
import {resetPasswordSchema} from "@/schemas/index";
import { ControlledInput } from "@/components";
import { useAuth } from "@/hooks/useAuth";
import { resetPasswordRequest } from "@/services/auth";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const { email } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ResetType>({
    mode: "onChange",
    defaultValues: {
      newPassword: "",
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async (data: ResetType) => {
    try {
      setLoading(true);
      await resetPasswordRequest(data, email?.email);
      setLoading(false);
      router.replace("/(not-authenticated)/signin/page");
      reset();
    } catch (error) {
      setLoading(false);
      const err = error as AxiosError;
      return err;
    }
  };

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
                name="newPassword"
                placeholder="Insira a nova senha"
                placeholderColor={Colors.dark.text}
                label="Nova senha"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                leftIcon={
                  <Ionicons
                    name="lock-closed"
                    size={24}
                    color={Colors.light.background}
                  />
                }
                rightIcon={
                  <Ionicons
                    name={showPassword ? "eye" : "eye-off"}
                    size={24}
                    color={Colors.light.background}
                    dd
                    onPress={toggleShowPassword}
                  />
                }
                errorMessage={errors?.newPassword?.message}
                borderColorInputFocus={Colors.light.text}
                borderColorInputBlur="#7589A4"
                backgroundColorInput="#7589A4"
              />
              <View style={styles.buttonSubmitContainer}>
                <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                  <LinearGradient
                    colors={["#35629d", Colors.light.background]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.buttonSubmit}
                  >
                    <Text style={styles.textButtonSubmit}>
                      {loading ? (
                        <ActivityIndicator
                          size="small"
                          color={Colors.light.text}
                        />
                      ) : (
                        "Finalizar"
                      )}
                    </Text>
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
