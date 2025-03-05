import React, { useState } from "react";
import { AxiosError } from "axios";
import { router } from "expo-router";
import { StyleSheet, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Box } from "@/components/ui/box";
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button, ButtonText } from "@/components/ui/button";
import { Colors } from "@/constants/Colors";
import { navigateTo } from "@/utils/drawer-menu";
import { useAuth } from "@/hooks/useAuth";

export const DrawerMenu = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const { signOut, setLoading } = useAuth();

  const onSubmit = async () => {
    try {
      setLoading(true);
      await signOut();
      setLoading(false);
      router.replace("/(not-authenticated)/signin/page");
    } catch (error) {
      setLoading(false);
      const err = error as AxiosError;
      return err;
    }
  };

  const openBiologyUrl = () => {
    Linking.openURL(
      "https://www.gov.br/mcti/pt-br/composicao/conselhos/concea/arquivos/arquivo/publicacoes-do-concea/guia_concea_1ed_animais-_ensino_ou_pesquisa_2023.pdf"
    ).catch((err) =>  Alert.alert("Erro", "Não foi possível abrir a URL"));
    setShowDrawer(false);
  };

  return (
    <Box>
      <LinearGradient
        colors={["#35629d", "#153d72"]}
        style={styles.circularGradient}
        start={{ x: -0.8, y: 1 }}
        end={{ x: 1.2, y: 1 }}
      >
        <MaterialIcons
          name="menu"
          size={24}
          color="white"
          style={styles.iconDrawer}
          onPress={() => {
            setShowDrawer(true);
          }}
        />
      </LinearGradient>
      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
      >
        <DrawerBackdrop />
        <DrawerContent
          className="w-[270px] md:w-[300px] bg-primary-500"
          style={{ borderColor: "transparent" }}
        >
          <DrawerBody contentContainerClassName="gap-8">
            <Pressable
              style={styles.bodyDrawerContainer}
              onPress={() =>
                navigateTo("/(authenticated)/home", setShowDrawer, router)
              }
            >
              <AntDesign name="home" size={24} color={Colors.light.text} />
              <Text style={styles.textDrawer}>Início</Text>
            </Pressable>
            <Pressable
              style={styles.bodyDrawerContainer}
              onPress={openBiologyUrl}
            >
              <AntDesign name="book" size={24} color={Colors.light.text} />
              <Text style={styles.textDrawer}>Biologia e manejo</Text>
            </Pressable>
            <Pressable
              style={styles.bodyDrawerContainer}
              onPress={() =>
                navigateTo(
                  "/(authenticated)/topics/search-topics",
                  setShowDrawer,
                  router
                )
              }
            >
              <AntDesign name="book" size={24} color={Colors.light.text} />
              <Text style={styles.textDrawer}>Legislação</Text>
            </Pressable>
            <Pressable
              style={styles.bodyDrawerContainer}
              onPress={() =>
                navigateTo("/calculations/calculations", setShowDrawer, router)
              }
            >
              <AntDesign
                name="calculator"
                size={24}
                color={Colors.light.text}
              />
              <Text style={styles.textDrawer}>Cálculos</Text>
            </Pressable>
            <Pressable style={styles.bodyDrawerContainer}>
              <FontAwesome
                name="thumbs-o-up"
                size={24}
                color={Colors.light.text}
              />
              <Text style={styles.textDrawer}>Avalie o aplicativo</Text>
            </Pressable>
          </DrawerBody>
          <DrawerFooter>
            <Button
              className="w-full gap-2"
              action="secondary"
              onPress={onSubmit}
            >
              <ButtonText>Sair do aplicativo</ButtonText>
              <SimpleLineIcons name="logout" size={24} color="black" />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

const styles = StyleSheet.create({
  circularGradient: {
    width: "100%",
    height: 40,
    justifyContent: "center",
  },
  iconDrawer: {
    paddingHorizontal: 5,
  },
  bodyDrawerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  textDrawer: {
    marginLeft: 10,
    fontSize: 16,
    color: Colors.light.text,
  },
});
