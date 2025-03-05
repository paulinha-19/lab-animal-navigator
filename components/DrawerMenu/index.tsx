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
    router.navigate(`/(authenticated)/pdf-viewer`);
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
        <Pressable
          style={styles.iconContainer}
          onPress={() => setShowDrawer(true)}
        >
          <MaterialIcons name="menu" size={24} color="black" />
        </Pressable>
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
            <Pressable
              style={styles.bodyDrawerContainer}
              onPress={() =>
                navigateTo(
                  "https://play.google.com/store/apps/details?id=com.paulinha19.labanimalnavigator",
                  setShowDrawer,
                  router
                )
              }
            >
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
              onPress={onSubmit}
              style={styles.logoutButton}
            >
              <ButtonText style={styles.textLogoutButton}>
                Sair do aplicativo
              </ButtonText>
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
    height: 50,
    justifyContent: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#35629d",
    marginLeft: 5,
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
  logoutButton: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#35629d",
    marginLeft: 5,
  },
  textLogoutButton: {
    color: "black",
  },
});
