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
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { AxiosError } from "axios";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Box } from "@/components/ui/box";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordEmail } from "@/types/index";
import {emailPasswordSchema} from "@/schemas/index";
import { ControlledInput } from "@/components/index";
import { useAuth } from "@/hooks/useAuth";
import { Colors } from "@/constants/Colors";

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const { onRegister } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PasswordEmail>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(emailPasswordSchema),
  });

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async (data: PasswordEmail) => {
    try {
      setLoading(true);
      await onRegister(data);
      setLoading(false);
      router.replace("/(not-authenticated)/signin/page");
      reset();
    } catch (error) {
      const err = error as AxiosError;
      setLoading(false);
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
          <Text style={styles.textHeader}>Criar uma conta</Text>
          <Box style={styles.containerForm}>
            <View style={styles.contaienerInputs}>
              <ControlledInput
                control={control}
                name="email"
                placeholder="Insira um email"
                placeholderColor={Colors.dark.text}
                label="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                leftIcon={
                  <MaterialIcons
                    name="alternate-email"
                    size={24}
                    color={Colors.light.background}
                  />
                }
                errorMessage={errors?.email?.message}
                borderColorInputFocus={Colors.light.text}
                borderColorInputBlur="#7589A4"
                backgroundColorInput="#7589A4"
              />
              <View>
                <ControlledInput
                  control={control}
                  name="password"
                  placeholder="Insira uma senha"
                  placeholderColor={Colors.dark.text}
                  label="Senha"
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  leftIcon={
                    <Ionicons
                      name="lock-closed-outline"
                      size={24}
                      color={Colors.light.background}
                    />
                  }
                  rightIcon={
                    <Ionicons
                      name={showPassword ? "eye-outline" : "eye-off-outline"}
                      size={24}
                      color={Colors.light.background}
                      onPress={toggleShowPassword}
                    />
                  }
                  errorMessage={errors?.password?.message}
                  borderColorInputFocus={Colors.light.text}
                  borderColorInputBlur="#7589A4"
                  backgroundColorInput="#7589A4"
                />
              </View>
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
                        "Cadastrar"
                      )}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={styles.containerCreateAccout}>
                <Link href="/(not-authenticated)/signin/page">
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
