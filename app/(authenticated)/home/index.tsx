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
      <View style={styles.lanaContainer}>
        <View style={styles.speechBubble}>
          <TypewriterText messages={lanaMessages} style={styles.speechText} />
          {/* <View style={styles.speechBubbleTriangle} /> */}
        </View>
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
      </View>
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
  lanaContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  speechBubble: {
    position: "absolute",
    backgroundColor: "white",
    right: 100,
    bottom: 70,
    width: 170,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderBottomRightRadius: 0,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#153d72",
  },
  speechBubbleTriangle: {
    position: "absolute",
    top: 54,
    right: -10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "white",
    transform: [{ rotateX: "-180deg" }, { rotateZ: "-180deg" }],
  },
  speechText: {
    textAlign: "center",
    fontSize: 14,
    color: "black",
  },
  fab: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
    right: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.light.background,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  lanaIcon: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
  badge: {
    position: "absolute",
    backgroundColor: "green",
    borderColor: "white",
    width: 12,
    height: 12,
    borderRadius: 6,
    bottom: 5,
    right: 5,
    borderWidth: 2,
  },
});
