import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  SafeAreaView, 
  ScrollView
} from "react-native";
import { AxiosError } from "axios";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, router } from "expo-router";
import { Box } from "@/components/ui/box";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordEmail } from "@/types/index";
import {emailPasswordSchema} from "@/schemas/index";
import { ControlledInput } from "@/components/index";
import { useAuth } from "@/hooks/useAuth";
import { Colors } from "@/constants/Colors";

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

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
      await signIn(data);
      router.replace("/(authenticated)/home");
      setLoading(false);
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
          <Text style={styles.textHeader}>Login</Text>
          <Box style={styles.containerForm}>
            <View style={styles.contaienerInputs}>
              <ControlledInput
                control={control}
                name="email"
                placeholder="Insira seu email"
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
                  placeholder="Insira sua senha"
                  placeholderColor="#ddd"
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
              <View style={styles.containerForgotPassword}>
                <Link href="/(not-authenticated)/forgot-password/page">
                  <Text style={styles.forgotPasswordLink}>
                    Esqueci minha senha
                  </Text>
                </Link>
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
                        "Entrar"
                      )}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={styles.containerCreateAccout}>
                <Link href="/(not-authenticated)/signup/page">
                  <Text style={[styles.textCreateAccout]}>
                    Ainda não tem uma conta? Cadastre-se
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
    position: "relative",
  },
  logoHome: {
    alignItems: "center",
  },
  sizeLogo: {
    width: 150,
    height: 100,
  },
  textSize: {
    fontSize: 40,
  },
  containerForm: {
    width: "100%",
    alignItems: "center",
  },
  contaienerInputs: {
    width: "85%",
    height: "100%",
  },
  containerForgotPassword: {
    marginTop: Platform.OS === "ios" ? 5 : 1,
  },
  forgotPasswordLink: {
    color: Colors.light.text,
    fontSize: 12,
    textAlign: "right",
  },
  buttonSubmitContainer: {
    alignSelf: "center", // Centers the button horizontally
  },
  buttonSubmit: {
    padding: 15,
    width: 200,
    borderRadius: 8,
    alignItems: "center", // Centers the content within the View
    justifyContent: "center", // Aligns the content vertically
    marginTop: 15,
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
  textCreateAccout: { fontSize: 12, color: Colors.light.text },
  textHeader: {
    color: Colors.light.text,
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
  },
});
