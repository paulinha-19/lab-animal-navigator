import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import {  router } from "expo-router";
import { DrawerMenu, TypewriterText } from "@/components";
import { Colors } from "@/constants/Colors";
import { Box } from "@/components/ui/box";
import { lanaMessages } from "@/data/typewriter";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background }}>
        <Box className="bg-primary-500" style={styles.containter}>
          <DrawerMenu />
          <Box style={styles.containerHome}>
            <Image
              style={styles.sizeLogo}
              source={require("../../../assets/images/logo-lab-animal.png")}
            />
            <Text style={styles.textLogo}>LabAnimal</Text>
            <Text style={styles.textLogo}>Navigator</Text>
            {/* <Text style={{ ...styles.textTopics, marginTop: 80 }}>Tópicos</Text> */}
            <Text
              onPress={() =>
                router.navigate("/(authenticated)/topics/search-topics")
              }
              style={{ ...styles.textTopics, marginTop: 90 }}
            >
              Clique aqui e explore assuntos de forma rápida e prática
            </Text>
          </Box>
        </Box>
      </ScrollView>
      {/* Floating Action Button (FAB) */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.navigate("/(authenticated)/bot-lana")}
      >
        <Image
          style={styles.lanaIcon}
          source={require("../../../assets/images/LANA_icon.png")}
        />
        <View style={styles.badge} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    position: "relative",
  },
  containerHome: {
    alignItems: "center",
    marginTop: 80,
  },
  sizeLogo: {
    width: 150,
    height: 100,
  },
  textLogo: {
    color: Colors.light.text,
    fontSize: 50,
  },
  textTopics: {
    color: Colors.light.text,
    fontSize: 15,
    textAlign: "center",
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lanaIcon: {
    width: 55,
    height: 55,
    resizeMode: "contain",
  },
  badge: {
    position: "absolute",
    bottom: 0,
    right: 5,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "green",
    borderWidth: 2,
    borderColor: Colors.light.background,
  },
});
