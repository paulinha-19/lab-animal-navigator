import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { Box } from "@/components/ui/box";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button, ButtonText } from "@/components/ui/button";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

export const DrawerMenu = () => {
  const [showDrawer, setShowDrawer] = useState(false);

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
            <Pressable style={styles.bodyDrawerContainer}>
              <AntDesign name="book" size={24} color={Colors.light.text} />
              <Text style={styles.textDrawer}>Biologia e manejo</Text>
            </Pressable>

            <Pressable style={styles.bodyDrawerContainer}>
              <AntDesign name="book" size={24} color={Colors.light.text} />
              <Text style={styles.textDrawer}>Experimentação</Text>
            </Pressable>

            <Pressable style={styles.bodyDrawerContainer}>
              <AntDesign name="book" size={24} color={Colors.light.text} />
              <Text style={styles.textDrawer}>Legislação</Text>
            </Pressable>

            <Pressable style={styles.bodyDrawerContainer}>
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
            <Button className="w-full gap-2" action="secondary">
              <ButtonText
                onPress={() => {
                  setShowDrawer(false);
                  router.replace("/(not-authenticated)/signup/page");
                }}
              >
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
